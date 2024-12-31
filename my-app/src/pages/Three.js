import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Font from '../images/fonts/Jura Light_Regular.json'; // Import font JSON directly

const Three = () => {
  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Initial Background Color
    let isBackgroundDark = true;
    scene.background = new THREE.Color('#01133f');

    // Light
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Parse Font and Create Logo
    const fontLoader = new FontLoader();
    const font = fontLoader.parse(Font); // Parse the imported JSON directly

    // Text Material
    const textMaterial = new THREE.MeshBasicMaterial({ color: '#02c8f0' });

    // Colon and Bracket Combined
    const textGeometry = new TextGeometry(':}', {
      font: font,
      size: 3,
      height: 0.3, // Increase thickness for a bolder appearance
      bevelEnabled: true, // Add bevel for smoother edges
      bevelThickness: 0.09,
      bevelSize: 0.04,
      curveSegments: 16, // Increase resolution for smoother edges
    });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.x = -1; // Center the logo
    scene.add(textMesh);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    // Camera Orbit Variables
    let angle = 0;
    const radius = 5;

    // Handle Background Toggle
    window.addEventListener('click', () => {
      isBackgroundDark = !isBackgroundDark;
      scene.background = new THREE.Color(isBackgroundDark ? '#01133f' : '#ffffff');
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Camera Orbit Logic
      angle += 0.007; // Adjust speed of orbit
      camera.position.x = radius * Math.sin(angle);
      camera.position.z = radius * Math.cos(angle);
      camera.lookAt(0, 0, 0); // Keep camera focused on the logo

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Three;
