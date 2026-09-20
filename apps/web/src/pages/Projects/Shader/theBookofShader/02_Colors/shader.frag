#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2  u_resolution;
uniform vec2  u_mouse;
uniform float u_time;

const vec3 colorA = vec3(0.149, 0.141, 0.912);
const vec3 colorB = vec3(1.000, 0.833, 0.224);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 m = u_mouse / u_resolution;
    vec2 dir = m - vec2(0.5);

    dir = length(dir) < 0.001 ? vec2(1.0, 1.0) : dir;
    dir = normalize(dir);

    float pct = dot(st - 0.5, dir) / (abs(dir.x) + abs(dir.y)) + 0.5;
    pct = clamp(pct, 0.0, 1.0);
    
    vec3 color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color, 1.0);
}