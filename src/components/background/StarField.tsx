"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Static star field ──
    const starCount = 2000;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const colors = new Float32Array(starCount * 3);

    const starColors = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xc8d8ff),
      new THREE.Color(0xffd0c8),
      new THREE.Color(0x22d3ee),
      new THREE.Color(0xa855f7),
    ];

    for (let i = 0; i < starCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      sizes[i] = Math.random() * 1.5 + 0.3;
      const c = starColors[Math.floor(Math.random() * starColors.length)];
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));
    starGeo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Shooting stars ──
    const shootingStars: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number; maxLife: number }[] = [];
    const shootingGeo = new THREE.BoxGeometry(0.05, 0.05, 1.5);
    const shootingMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.9 });

    function spawnShootingStar() {
      const mesh = new THREE.Mesh(shootingGeo, shootingMat.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() * 0.5 + 0.3) * 50,
        (Math.random() - 0.5) * 50
      );
      const vel = new THREE.Vector3(
        -(Math.random() * 0.8 + 0.4),
        -(Math.random() * 0.4 + 0.1),
        0
      );
      mesh.lookAt(mesh.position.clone().add(vel));
      scene.add(mesh);
      shootingStars.push({ mesh, velocity: vel, life: 0, maxLife: 60 });
    }

    let frameCount = 0;
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.02;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.02;
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Animation ──
    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      frameCount++;

      // Gentle drift
      stars.rotation.y += 0.00015 + mouseX * 0.01;
      stars.rotation.x += 0.00005 + mouseY * 0.01;

      // Spawn shooting star randomly
      if (frameCount % 180 === 0 && Math.random() > 0.4) spawnShootingStar();

      // Update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;
        s.mesh.position.add(s.velocity);
        const opacity = 1 - s.life / s.maxLife;
        (s.mesh.material as THREE.MeshBasicMaterial).opacity = opacity * 0.9;
        if (s.life >= s.maxLife) {
          scene.remove(s.mesh);
          shootingStars.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    // ── Resize ──
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ background: "radial-gradient(ellipse at 30% 20%, #0f0a2e 0%, #050811 60%)" }}
    />
  );
}
