import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as glsl from 'glslify'; 



let currentMount2 = null

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(30, window.innerHeight/ window.innerWidth, 0.1, 10000)
camera.position.z =30
camera.position.y = 15


scene.add(camera)

const renderer = new THREE.WebGLRenderer({alpha: true})
 
// 

let particles = 100
const vertices = 2

const positions = []
// const positions = new Float32Array( particles * 3 );



for( let i = 0; i < particles; i++){
    for(let j = 0; j < particles; j++){
        let x = vertices * (i - particles / 2)
        let y = 0
        let z = vertices * (j - particles / 2)

        positions.push(x, y, z)
    }

}

const geometrys = new THREE.BufferGeometry()
geometrys.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))


const materials = new THREE.ShaderMaterial(
    {
    uniforms:{
        uTime: {value: 0.0}
    },
    vertexShader: glsl`

        uniform float uTime;

        void main(){
            vec4 modelPosition = modelMatrix * vec4(position, 1);
            float ElevationX = cos(modelPosition.x * 0.3 + uTime) * 1.0;
            float ElevationZ = sin(modelPosition.z * 0.3 + uTime) * 1.0;
            modelPosition.y = (ElevationX + 0.6) + (ElevationZ + 0.6);
            
            gl_PointSize = 3.0; 
            gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }`
        ,
        fragmentShader: glsl`

        void main(){ 
            if (distance(gl_PointCoord, vec2(0.5, 0.5)) > 0.5) discard;
            gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
        } 
    `
})

const plano = new THREE.Points(geometrys, materials)
plano.rotation.x = Math.PI * -0.4
scene.add(plano)



const controls1 = new OrbitControls(camera, renderer.domElement)
controls1.enableZoom = false
controls1.enableRotate = false


const animated = function(){
    materials.uniforms.uTime.value += 0.04
    controls1.update()
    requestAnimationFrame(animated)
    renderer.render(scene, camera)
}

animated()

const resize = () =>{
    renderer.setSize(currentMount2.clientWidth, currentMount2.clientHeight)
    camera.aspect = currentMount2.clientWidth / currentMount2.clientHeight
    camera.updateProjectionMatrix()
}
window.addEventListener('resize', resize)

export const mountWave = (mountRef2) =>{
    currentMount2 = mountRef2.current
    resize()
    currentMount2.appendChild(renderer.domElement)
}

//clean up scene
export const cleanUpWave = () =>{
    // scene.dispose()
    currentMount2.removeChild(renderer.domElement)
}