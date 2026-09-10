"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Device-aware particle density
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const particleCount = isMobile ? 25 : isTablet ? 55 : 95;
    const maxDistance = isMobile ? 70 : 110;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 280;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle nodes
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const bounds = { x: width * 0.35, y: height * 0.35, z: 120 };

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

      velocities.push({
        x: (Math.random() - 0.5) * 0.25,
        y: (Math.random() - 0.5) * 0.25,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle Material (Electric Cyan tone)
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 2.5 : 3.5,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Line connections
    const maxConnections = (particleCount * (particleCount - 1)) / 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.45,
      })
    );
    scene.add(lineMaterial);

    // Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      const pos = particleGeometry.attributes.position.array as Float32Array;
      let vertexPosIndex = 0;
      let colorPosIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        // Update position with velocity
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce within bounds
        if (Math.abs(pos[i * 3]) > bounds.x) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > bounds.y) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > bounds.z) velocities[i].z *= -1;

        // Proximity connections
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[vertexPosIndex++] = pos[i * 3];
            linePositions[vertexPosIndex++] = pos[i * 3 + 1];
            linePositions[vertexPosIndex++] = pos[i * 3 + 2];

            linePositions[vertexPosIndex++] = pos[j * 3];
            linePositions[vertexPosIndex++] = pos[j * 3 + 1];
            linePositions[vertexPosIndex++] = pos[j * 3 + 2];

            // Electric cyan with falloff
            const r = 0.22 * alpha;
            const g = 0.74 * alpha;
            const b = 0.97 * alpha;

            lineColors[colorPosIndex++] = r;
            lineColors[colorPosIndex++] = g;
            lineColors[colorPosIndex++] = b;

            lineColors[colorPosIndex++] = r;
            lineColors[colorPosIndex++] = g;
            lineColors[colorPosIndex++] = b;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;

      lineGeometry.setDrawRange(0, vertexPosIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // Slow scene rotation
      scene.rotation.y += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (!isMobile) window.removeEventListener("mousemove", handleMouseMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
