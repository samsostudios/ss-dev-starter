import { gsap } from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

console.log("/// threeJS ///");

export default class Sketch {
  constructor() {
    this.time = 0;
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.addMesh();
    this.render();
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("threeSection")
      .appendChild(this.renderer.domElement);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    this.camera.position.z = 1;
  }

  createScene() {
    this.scene = new THREE.Scene();
  }

  addMesh() {
    this.geometry = new THREE.PlaneGeometry(1, 1);
    this.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  render() {
    this.time += 1;
    this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.003;

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch();
