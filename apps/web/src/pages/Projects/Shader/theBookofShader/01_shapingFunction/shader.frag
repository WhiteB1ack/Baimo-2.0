#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.x) -
          smoothstep( pct, pct+0.01, st.x);
}

void main() {
vec2 st = gl_FragCoord.xy/u_resolution.xy;
vec3 color = vec3(0.0);

vec3 pct = vec3(st.y);

pct.r = 0.5 + sin(u_time * PI + st.y * PI / 3.0) * 0.5;
pct.g = 0.5 + sin(u_time * PI + st.y * PI * 2.0 / 3.0 ) * 0.5;
pct.b = 0.5 + sin(u_time * PI + st.y * PI) * 0.5;

color = mix(colorA, colorB, pct);

// Plot transition lines for each channel
color = mix(color,vec3(0.8,0.0,0.0),plot(st,pct.r));
color = mix(color,vec3(0.0,0.9,0.0),plot(st,pct.g));
color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

gl_FragColor = vec4(color,1.0);
}