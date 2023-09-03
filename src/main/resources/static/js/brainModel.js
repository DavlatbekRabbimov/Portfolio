import * as THREE from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
export function create3DModel(brainGroup) {
        const loader = new GLTFLoader();
        loader.load('./model/scene.gltf', function (gltf) {
            let brain = gltf.scene;
            brain.scale.set(0.15, 0.15, 0.15);

            const box = new THREE.Box3().setFromObject(brain);
            const center = box.getCenter(new THREE.Vector3());
            brain.position.sub(center);

            const modelMaterial = new THREE.MeshStandardMaterial({
                color: 0xFFD700,
                roughness: 0.4,
                metalness: 0.6,
            });

            applyMaterialToModel(brain, modelMaterial);

            function applyMaterialToModel(model, material) {
                model.traverse(function (node) {
                    if (node instanceof THREE.Mesh) {
                        node.material = material;
                    }
                });
            }
            brainGroup.add(brain);
        });
}
