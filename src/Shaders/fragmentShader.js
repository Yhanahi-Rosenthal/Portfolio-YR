import * as glsl from 'glslify'; 

// uniform sampler2D globleTexture;

export const fragmentShader = glsl `
     void main(){ 
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        } 
`