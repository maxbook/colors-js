function cssHexToRgb(hexaCss) {
  var hexa = (hexaCss.charAt(0) == '#') ? hexaCss.slice(1, 7) : hexaCss;
  rgb = {
    r : parseInt('0x'+hexa.slice(0,2), 16),
    g : parseInt('0x'+hexa.slice(2,4), 16),
    b : parseInt('0x'+hexa.slice(4,6), 16)
  }
  return rgb;
}

function rgbToCssHex(r, g, b) {
  return '#'
    + r.toString(16)
    + g.toString(16)
    + b.toString(16)
}

function lighten(hexaCss, percent) {
  var rgb = cssHexToRgb(hexaCss);
  var rgbLighten = {
    r : rgb.r + parseInt((255 - rgb.r) / 100 * percent),
    g : rgb.g + parseInt((255 - rgb.g) / 100 * percent),
    b : rgb.b + parseInt((255 - rgb.b) / 100 * percent)
  }
  return rgbToCssHex(
    (rgbLighten.r >= 255) ? 255 : rgbLighten.r,
    (rgbLighten.g >= 255) ? 255 : rgbLighten.g,
    (rgbLighten.b >= 255) ? 255 : rgbLighten.b
  );
}

console.log(cssHexToRgb('#3364B3')); // { r: 51, g: 100, b: 179 }
console.log(rgbToCssHex(51, 100, 179)); // #3364b3
console.log(lighten('#3364B3', 10)); // #4773ba
