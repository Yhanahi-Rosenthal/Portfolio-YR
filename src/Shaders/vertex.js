import * as glsl from 'glslify'; 



export const vertex = glsl ` 

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1);
    gl_Position = projectionMatrix * ViewMatrix * modelPosition;
}`