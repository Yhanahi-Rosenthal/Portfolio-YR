import * as THREE from 'three';

let currentBack = null

        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(30, 100/ 100, 0.1, 1000)
        camera.position.z = 5
        // scene.position.y = 3
        scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({alpha: true}) //alpha:true --> background trasparente.

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000

    const positionArray = new Float32Array(particlesCount * 3)
    // xyz, xyz, xyz

    for( let i = 0; i < particlesCount * 3; i++){
        // positionArray[i] = Math.random() -> cubo de puntos
        // positionArray[i] = Math.random() - 0.5 -> centrar cubo de puntos
        positionArray[i] = (Math.random() - 0.5) * 10 //->hace scale y parece un estrellado
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))


    // texture
    // const loader = new TextureLoader()
    // const html = loader.load('./imgs/html.png')

    // const materiales = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: html } );
    // material backgroundPoints
    const materiales = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00eaff
        // map: html,
    //    transparent: true
    })

    //mesh Backgroundpoints
    const particlesMesh = new THREE.Points(particlesGeometry, materiales)
    scene.add(particlesMesh)

    //resize
    const resize = () =>{
        renderer.setSize(currentBack.clientWidth, currentBack.clientHeight)
        camera.aspect = currentBack.clientWidth / currentBack.clientHeight
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)

    const animateStars =()=>{
        particlesMesh.rotateY(0.003)
        renderer.render(scene, camera)
        requestAnimationFrame(animateStars)
    }

    animateStars()

    const animated = function(){
        requestAnimationFrame(animated)
        // torus.rotation.y += 0.01
        renderer.render(scene, camera)
    }

    animated()

    export const mountStars = (mountRef1) =>{
        currentBack = mountRef1.current
        resize()
        currentBack.appendChild(renderer.domElement)
    }

    //clean up scene
   export const cleanUpStars = () =>{
        // scene.dispose()
        currentBack.removeChild(renderer.domElement)
}
