export function rotateScene(brainGroup){
    let isMouseWheelPressed = false;
    let saveRotationX = 0;
    let saveRotationY = 0;

    document.addEventListener('mousedown', (event)=> {
        if (event.button === 1){
            isMouseWheelPressed = true;
            saveRotationX = brainGroup.rotation.x;
            saveRotationY = brainGroup.rotation.y;
        }
    });

    document.addEventListener('mouseup', (event)=>{
        if (event.button === 1) {
            isMouseWheelPressed = false;

        }
    })

    document.addEventListener('mousemove', (event)=> {
        if (isMouseWheelPressed) {
            onMove(event)
        }
    })
    function onMove(event){
        const wheelX = (event.clientX / window.innerWidth) * 2 - 1;
        const wheelY = (event.clientY / window.innerHeight) * 2 - 1;

        const rotationX = wheelY * Math.PI;
        const rotationY = wheelX * Math.PI;

        const maxDistanceFromCenter = 3;
        const distanceFromCenter = Math.sqrt(wheelX * wheelX + wheelY * wheelY);
        if (distanceFromCenter <= maxDistanceFromCenter){
            const newRotationX = saveRotationX + rotationX;
            const newRotationY = saveRotationY + rotationY;
            brainGroup.rotation.set(newRotationX, newRotationY, 0);
        }
    }
}