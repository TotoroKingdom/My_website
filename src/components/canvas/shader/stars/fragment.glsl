void main() {
  float dis = distance(gl_PointCoord.xy, vec2(0.5));
  float strength = 0.05 / dis - 0.1;
  gl_FragColor = vec4(1., 1., 1., strength);
}