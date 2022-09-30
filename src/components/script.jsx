import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {DragControls} from 'three/examples/jsm/controls/DragControls';
import {TransformControls } from 'three/examples/jsm/controls/TransformControls';
import {ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { BackSide, InvertStencilOp, TextureLoader, Vector2, Vector3 } from 'three';
import vertex from '../Shaders/vertex.js';
import fragmentShader from '../Shaders/fragmentShader.js';
import * as glsl from 'glslify'; 



let currentMount = null

        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(30,100/ 100, 1, 8000)
        camera.position.z = 5
        // scene.position.y = 3
        scene.add(camera)

    // Renderer
    const renderer = new THREE.WebGLRenderer({alpha:true}) //alpha:true --> background trasparente.
    
  
    
    //textures
    const Texture = new THREE.TextureLoader()
    const map = Texture.load('./matcap/Tiles_048_basecolor.jpg')
    const ao = Texture.load('./matcap/Tiles_048_ambientOcclusion.jpg')
    const rougness = Texture.load('./matcap/Tiles_048_roughness.jpg')
    const normal = Texture.load('./matcap/Tiles_048_normal.jpg')
    const height = Texture.load('./matcap/Tiles_048_height.png')
    const metal = Texture.load('./matcap/Tiles_048_metallic.jpg')
   


    //sphere
    const geometry = new THREE.SphereGeometry(1.5, 50, 100)

    const texture = new THREE.TextureLoader()
    const map1 = texture.load('./matcap/Lava_006_basecolor.jpg')
    const ao1 = texture.load('./matcap/Lava_006_ambientOcclusion.jpg')
    const rougness1 = texture.load('./matcap/Lava_006_roughness.jpg')
    const normal1 = texture.load('./matcap/Lava_006_normal.jpg')
    const height1 = texture.load('./matcap/Lava_006_height.png')
    const emissive = texture.load('./matcap/Lava_006_emissive.jpg')

    const material = new THREE.MeshStandardMaterial({
        map: map1,
        aoMap: ao1,
        roughness: rougness1,
        normalMap: normal1,
        displacementMap: height1,
        displacementScale: 0.05,
        metalnessMap: emissive
        // color: 0x1c1023,
        // transparent: true,
        // opacity: 0.3
    })
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set( 1, 1 );
    // material.side = THREE.DoubleSide // -> para poder ver la cara interna
    // material.map = texture
   
    const pelota = new THREE.Mesh(geometry, material)
    
    // const atmosphere = new THREE.ShaderMaterial({
    //     vertexShader,
    //     fragmentShader
    // })
    // pelota.add(atmosphere)

    // pelota.rotation.x = 0.4
    pelota.scale.set(0.3, 0.3, 0.3)
    // pelota.position.set(4, 0, 0)
    scene.add(pelota)

    // const geometry123 = new THREE.SphereGeometry(1.5, 50, 100)
    // const material123 = new THREE.MeshBasicMaterial({
    //     color: 0xffaa00,
    //     transparent: true,
    //     opacity: 1
    // })
    // const pelota123 = new THREE.Mesh(geometry123, material123)

    
    // material123.side = THREE.BackSide
    // pelota123.scale.set(0.309, 0.309, 0.309)
    // scene.add(pelota123)
    
    // const atmosphere = new THREE.ShaderMaterial({
    //     vertex: glsl`   
    //     void main(){
    //         vec4 modelPosition = modelMatrix * vec4(position, 1);
    //         gl_Position = projectionMatrix * ViewMatrix * modelPosition;
    //     }`
    //     ,
    //     fragmentShader: glsl`
    //     void main(){ 
    //         gl_FragColor = vec4(0.0, 1.0, 0.0, 0.1);
    //     } 
    // `
    // })

    // const GeometriaAtmo = new THREE.SphereGeometry(0.3, 50, 100)


    // const atmo = new THREE.Mesh(GeometriaAtmo, atmosphere)
    // GeometriaAtmo.side = BackSide 
    // scene.add(atmo)


    const geometry1 = new THREE.BoxGeometry(1, 1, 1)
    const material1 = new THREE.MeshStandardMaterial({
        // color: 0x00ff00,
        // size: 0.007
        transparent: true
    })
    const texture1 = new THREE.TextureLoader().load('./imgs/html.png')
    material1.map = texture1
    material1.side = THREE.DoubleSide
    const pelota1 = new THREE.Mesh(geometry1, material1)
    pelota.add(pelota1)
    pelota1.position.set(4, 0 ,0)

    const geometry2 = new THREE.BoxGeometry(1, 1, 1)
    const material2 = new THREE.MeshStandardMaterial({
        transparent: true
    })
    const pelota2 = new THREE.Mesh(geometry2, material2)
    const texture2 = new THREE.TextureLoader().load('./imgs/css.png')
    material2.side = THREE.DoubleSide
    material2.map = texture2
    pelota.add(pelota2)
    pelota2.position.set(-4, 0 ,0)
    
    const geometry3 = new THREE.BoxGeometry(1, 1, 1)
    const material3 = new THREE.MeshStandardMaterial({
        transparent: true
    })
    const pelota3 = new THREE.Mesh(geometry3, material3)
    const texture3 = new THREE.TextureLoader().load('/imgs/js.png')
    material3.map= texture3
    material3.side= THREE.DoubleSide
    pelota.add(pelota3) 
    pelota3.position.set(0, 0 ,-4)
    
    const geometry4 = new THREE.BoxGeometry(1, 1, 1)
    const material4 = new THREE.MeshStandardMaterial({
        transparent: true
    })
    const pelota4 = new THREE.Mesh(geometry4, material4)
    const texture4 = new THREE.TextureLoader().load('/imgs/react.png')
    material4.map= texture4
    material4.side= THREE.DoubleSide
    pelota.add(pelota4)
    pelota4.position.set(0, 0 ,4)

    const geometry5 = new THREE.BoxGeometry(1, 1, 1)
    const material5 = new THREE.MeshStandardMaterial({
        transparent: true
    })

    const pelota5 = new THREE.Mesh(geometry5, material5)
    const texture5 = new THREE.TextureLoader().load('/imgs/git.png')
    material5.map= texture5
    material5.side= THREE.DoubleSide
    pelota.add(pelota5)
    pelota5.position.set(3, 0 ,3)

    const geometry6 = new THREE.BoxGeometry(1, 1, 1)
    const material6 = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })

    const pelota6 = new THREE.Mesh(geometry6, material6)
    const texture6 = new THREE.TextureLoader().load('/imgs/bootstrap.png')
    material6.map= texture6
    material6.side= THREE.DoubleSide
    pelota.add(pelota6)
    pelota6.position.set(-3, 0 ,-3)

    const geometry7 = new THREE.BoxGeometry(1, 1, 1)
    const material7 = new THREE.MeshStandardMaterial({
        // transparent: true
    })
  

    const pelota7 = new THREE.Mesh(geometry7, material7)
    const texture7 = new THREE.TextureLoader().load('/imgs/github.png')
    material7.map= texture7
    material7.side= THREE.DoubleSide
    pelota.add(pelota7)
    pelota7.position.set(-3, 0 ,3)

    const geometry8 = new THREE.BoxGeometry(1, 1, 1)
    const material8 = new THREE.MeshStandardMaterial({
        transparent: true
    })

    const pelota8 = new THREE.Mesh(geometry8, material8)
    const texture8 = new THREE.TextureLoader().load('/imgs/sass.png')
    material8.map= texture8
    material8.side= THREE.DoubleSide
    pelota.add(pelota8)
    pelota8.position.set(3, 0 ,-3)


   

    //lights
     const AO = new THREE.AmbientLight(0xffffff, 1.1)
     scene.add(AO)

    // const pointLigth = new THREE.PointLight(
    //         0xffffff, 
    //         1.3
    //     )
    // pointLigth.position.y = 2
    // pointLigth.position.x = 2
    // scene.add(pointLigth)

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    // directionalLight.position.set(5,5,5)
    // scene.add(directionalLight)

// //    controls
//     const controls1 = new DragControls( [cube], camera, renderer.domElement );
        
//     // add event listener to highlight dragged objects

//     controls1.addEventListener( 'dragstart', ()=> {
//         controls.enabled = false;
//     } );

//     controls1.addEventListener( 'dragend', ()=> {
//         controls.enabled = true;
//     } );
    
    const controls = new OrbitControls(camera, renderer.domElement)
    // controls.target = new THREE.Vector3(2, 2, 2)//--> PARA CAMBIAR EL PUNTO DE ANCLAJE.
    controls.enableDamping = true
    // controls.minDistance = 3
    // controls.maxDistance = 10
    // controls.minPolarAngle = Math.PI / 2 // --> para que el angulo sea 0
    controls.minPolarAngle = 1.2
    controls.maxPolarAngle = 1.2
    controls.enableZoom = false

    // const controls1 = new ArcballControls(camera, renderer.domElement, pelota)

    // controls1.addEventListener('change', ()=>{
    //     renderer.render(scene, camera)
    // })

    // controls1.enableZoom= false
    // controls1.setTbRadius = 0.1
    // // controls1.radiusFactor= 0.1
    // controls1.setGizmosVisible = false
    // controls1.enableGizmos = false;
    // controls1.dampingFactor = 0;
    // // camera.position.set(4, 0, 0)

    //resize
    const resize = () =>{
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)

    //renderer the scene
        const animate = ()=>{
            controls.update()
            // controls1.update()
            // particlesMesh.rotateY(0.00009)
            pelota.rotateY(0.005)
            pelota1.rotateY(0.02)
            pelota2.rotateY(0.02)
            pelota3.rotateY(0.02)
            pelota4.rotateY(0.02)
            pelota5.rotateY(0.02)
            pelota6.rotateY(0.02)
            pelota7.rotateY(0.02)
            pelota8.rotateY(0.02)
            // points.rotation.y += 0.001

            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()


        //cicle animated
        const animated = function(){
            requestAnimationFrame(animated)
            // torus.rotation.y += 0.01
            renderer.render(scene, camera)
        }

        animated()

        // const rotate = new TransformControls(camera, renderer.domElement)
        // // rotate.addEventListener('draggin-changed', (e)=>{
        // //     OrbitControls.enabled = !e.value
            
        // // })

        // rotate.attach(cube)
        // rotate.setMode('rotate')
        // rotate.setSize(1.6)
        // rotate.setSpace('local')
    
        // // rotate.setTranslationSnap(2)
        // rotate.showX=false
        // rotate.dispose()
        // rotate.setScaleSnap()
        // scene.add(rotate)

        //Mount scene
        export const mountScene = (mountRef) =>{
            currentMount = mountRef.current
            resize()
            currentMount.appendChild(renderer.domElement)
        }

        //clean up scene
       export const cleanUpScene = () =>{
            // scene.dispose()
            currentMount.removeChild(renderer.domElement)
    }

    