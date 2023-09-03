import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';

import {rotateScene} from './rotationBrain.js';
import {createSceneLight} from './sceneLighting.js';
import {create3DModel} from './brainModel.js';
import createLogo from './myLogo.js';
import {createJSButtonTextureAndClick} from "./JSButton.js";

let scene, camera, brainGroup, logoGroup
let renderer, buttonSprite
init();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    createSceneLight(scene);

    const wallpaperTextureLoader = new THREE.TextureLoader();
    const wallpaperTexture = wallpaperTextureLoader.load('./images/background.jpg', () => {
        scene.background = wallpaperTexture;
    }, undefined, (error) => {
        console.error('Ошибка загрузки текстуры фона', error);
    });

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(renderer.domElement);

    logoGroup = new THREE.Group();
    createLogo(logoGroup);
    scene.add(logoGroup);

    brainGroup = new THREE.Group();
    createJSButtonTextureAndClick(camera, brainGroup);
    create3DModel(brainGroup);
    scene.add(brainGroup);

    window.addEventListener('resize', onWindowResize);
    animate();
}

function animate() {

    requestAnimationFrame(animate);
    rotateScene(brainGroup);
    renderer.render(scene, camera);
}
function onWindowResize() {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}






