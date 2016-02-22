# Colors JS

Color helpers in javascript

## Convert CSS hex to RGB array

```javascript
cssHexToRgb('#3364B3');
/*
return array :
{ r: 51, g: 100, b: 179 }
*/
```

## Convert RGB to CSS hex string

```javascript
rgbToCssHex(51, 100, 179);
/*
return string :
#3364b3
*/
```

## Lighten color

Increase the lightness of a color.

- color : Css hex string
- amount : A percentage 0-100.

```javascript
lighten('#3364B3', 10);
/*
return string :
#4773ba
*/
```
