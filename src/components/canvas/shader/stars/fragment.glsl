uniform float uTime;

float random(vec2 st) {
  return fract(sin(dot(st.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float dis = distance(gl_PointCoord.xy, vec2(0.5));
  float strength = 0.05 / dis - 0.1;

  // 生成随机颜色
  vec3 randomColor = vec3(random(gl_FragCoord.xy));
  gl_FragColor = vec4(randomColor, strength);

}