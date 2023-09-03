import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
export function createSceneLight(scene){
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const frontDepthLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontDepthLight.position.set(0, 0, 10);
    scene.add(frontDepthLight);

    const backDepthLight = new THREE.DirectionalLight(0xffffff, 0.8);
    backDepthLight.position.set(0, 0, -10);
    scene.add(backDepthLight);

    const frontHeightLight = new THREE.DirectionalLight(0xffffff, 0.5);
    frontHeightLight.position.set(0, 10, 0);
    scene.add(frontHeightLight);

    const backHeightLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backHeightLight.position.set(0, -10, 0);
    scene.add(backHeightLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 0, 2);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);
}