// const makeColor = function(r,g,b) {
//   const color = {};
//   color.r = r;
//   color.b = b;
//   color.g = g;
//   color.rgb = function() {
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   color.hex = function() {
//     return (
//       '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     );
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();

// function Color(r,g,b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function() {
//   const { r,g,b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.rgba = function(a = 0.6) {
//   const { r,g,b } = this;
//   return `rgb(${r}, ${g}, ${b}, ${a})`;
// }

// Color.prototype.hex = function() {
//   const { r,g,b } = this;
//   return (
//            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//          );
// }

// const color1 = new Color(200,255,40);
// const color2 = new Color(30,60,90);

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  innerRGB() {
    const{ r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const {r, g, b} = this;
    return(
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  }
}
