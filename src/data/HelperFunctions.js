export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// pass only 6 digit codes
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// outputs rbg in decimal between 0 and 1
export function hexToRgbDecimal(hex) {
  const rgb = hexToRgb(hex)
  return {
    r: rgb.r / 255,
    g: rgb.g / 255,
    b: rgb.b / 255
  }
}

export function calculateLuminance(hex) {
  const rgb = hexToRgbDecimal(hex)
  const luminance = ((0.375 * rgb.r) + (0.5 * rgb.g) + (0.125 * rgb.b)) * 100
  // const luminance = ((0.299 * rgb.r) + (0.587 * rgb.g) + (0.114 * rgb.b)) * 100

  return luminance
}