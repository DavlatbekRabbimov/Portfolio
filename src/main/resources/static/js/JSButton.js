import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';

let buttonSprite

export function createJSButtonTextureAndClick(camera, brainGroup) {

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./images/java.png');
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({map: texture});
    buttonSprite = new THREE.Sprite(material);
    buttonSprite.scale.set(0.7, 0.7, 0.7);
    buttonSprite.position.set(0, 2.4, 0);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


    window.addEventListener('click', (event) => {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(buttonSprite);
        if (intersects.length > 0) {

            //AJAX-запрос
            fetch('http://localhost:8080/api/search_engine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            window.open('http://localhost:8181/', '_blank');
        }

    });

    brainGroup.add(buttonSprite);

}


