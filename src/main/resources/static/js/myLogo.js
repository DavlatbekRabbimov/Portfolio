import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
export default function createLogo(logoGroup){

    const logoGeometry = new THREE.PlaneGeometry(1.2,1.2);
    const logoTexture = new THREE.TextureLoader().load('./images/dcLogo.png');
    const logoMaterial = new THREE.MeshStandardMaterial({map: logoTexture});
    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);

    logoGroup.add(logoMesh);
    logoGroup.scale.set(0.9, 0.3, 1);
    logoGroup.position.set(-5.8, 2.6, 1);

}

