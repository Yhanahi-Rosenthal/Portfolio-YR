import * as THREE from 'three';

let currentBack1 = null

        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(30, 100/ 100, 0.1, 8000)
        camera.position.z = 5
        scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({alpha:true}) //alpha:true --> background trasparente.

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

    // material backgroundPoints
    const materiales = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff
    })

    //mesh Backgroundpoints
    const particlesMesh = new THREE.Points(particlesGeometry, materiales)
    scene.add(particlesMesh)

    const particlesGeometry1 = new THREE.BufferGeometry()
    const particlesCount1 = 1000

    const positionArray1 = new Float32Array(particlesCount1 * 3)

    for( let i = 0; i < particlesCount1 * 3; i++){
        positionArray1[i] = (Math.random() - 0.5) * 10 
    }

    particlesGeometry1.setAttribute('position', new THREE.BufferAttribute(positionArray1, 3))


    // material backgroundPoints
    const materiales1 = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff
    })

    //mesh Backgroundpoints
    const particlesMesh1 = new THREE.Points(particlesGeometry1, materiales1)
    scene.add(particlesMesh1)
    particlesMesh1.position.z = 10

    const animated = function(){
        particlesMesh1.rotation.z += 0.001
        particlesMesh1.position.z += 0.15
        if(particlesMesh1.position.z > 4){
         particlesMesh1.position.z = -4
        }
        particlesMesh.rotation.z += 0.001
        particlesMesh.position.z += 0.15
        if(particlesMesh.position.z > 4){
         particlesMesh.position.z = -4
        }
         requestAnimationFrame(animated)
         renderer.render(scene, camera)
     }
 
     animated()

     const display = function(){
        requestAnimationFrame(display)
        renderer.render(scene, camera)
    }

    display()
    
    //resize
    const resize = () =>{
        renderer.setSize(currentBack1.clientWidth, currentBack1.clientHeight)
        camera.aspect = currentBack1.clientWidth / currentBack1.clientHeight
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)


    export const mountSpace = (mountRef3) =>{
        currentBack1 = mountRef3.current
        resize()
        currentBack1.appendChild(renderer.domElement)
    }

    //clean up scene
   export const cleanUpSpace = () =>{
        // scene.dispose()
        currentBack1.removeChild(renderer.domElement)
}