uniform sampler2D uDiffuseTexture;
varying vec3 vColor;
varying vec2 vUv;

void main() {
  float dis = distance(gl_PointCoord, vec2(0.5));
  if(dis > 0.5)
    discard;
  vec3 col = texture2D(uDiffuseTexture, vUv).rgb;
  float alhpa = 1. - smoothstep(0.4, 0.5, dis);
  gl_FragColor = vec4(col, alhpa);
  #include <tonemapping_fragment>
	#include <encodings_fragment>
}