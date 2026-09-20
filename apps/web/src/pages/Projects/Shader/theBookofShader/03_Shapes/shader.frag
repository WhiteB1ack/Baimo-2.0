#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float line_up(float x, vec2 st){
    return 1.0 - step( abs(st.x - x), 0.013);
}

float line_right(float y, vec2 st){
    return 1.0 - step( abs(st.y - (1.0 - y)), 0.012);
}

float color_area(vec2 point1, vec2 point2, vec2 st){
   vec2 result_point = vec2(0.0); 
    vec2 distance = vec2( abs(point1.x - point2.x), abs(point1.y - point2.y) );
    vec2 mid = vec2( (point1.x + point2.x)/2.0, (point1.y + point2.y)/2.0 );
    
    result_point.x = step( abs(st.x - mid.x), distance.x / 2.0);
    result_point.y = step( abs(st.y - mid.y), distance.y / 2.0);
    
    float result = result_point.x * result_point.y;
   return result;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.9686, 0.9412, 0.8706);
    
    vec3 colorA = vec3(0.9686, 0.9412, 0.8706);
    vec3 colorB = vec3(0.7216, 0.1373, 0.1451);
    vec3 colorC = vec3(0.0118, 0.3765, 0.6157);
    vec3 colorD = vec3(0.9647, 0.7373, 0.1647);

    // bottom-left
    //vec2 bl = step(vec2(0.006),st);
    float pct = 1.0;

    // top-right
    //vec2 tr = step(vec2(0.006),1.0-st);
    //pct *= tr.x * tr.y;

    float line1 = (line_up(0.1425, st) )* line_up(0.26625, st) * line_up(0.70875, st) * line_up(0.89, st);
    float line2 = line_right(0.1785, st) * line_right(0.365, st) * line_right(0.91625, st);
    
    pct *= line1 * line2 ;
    
    
    float maskB  = color_area( vec2(0.000,1.00) ,vec2(0.255,0.630), st);
    float maskC  = color_area( vec2(1.00,0.00) ,vec2(0.710,0.080), st);
    float maskD  = color_area( vec2(1.00,1.00) ,vec2(0.880,0.635), st);
    float maskA  = color_area( vec2(0.00,0.00), vec2(0.25, 0.25), st );
    
    color *= vec3(pct);
    color = mix(color, colorB, maskB * pct);    
    color = mix(color, colorC, maskC * pct);   
    color = mix(color, colorD, maskD * pct);    
    color = mix(color, colorA, 0.0);

    gl_FragColor = vec4(color,1.0);
}