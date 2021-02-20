
type RGBA = {
    r: number,
    g: number, 
    b: number,
    a: number
}

type RGBAFunction = (decimalObject: {r: string, g: string, b: string , a: string}) => RGBA

const removeHash = (hex: string) => (hex.charAt(0) === '#' ? hex.slice(1) : hex);

const parseHex = (nakedHex: string) => {
  const isShort = (
    nakedHex.length === 3
    || nakedHex.length === 4
  );

  const twoDigitHexR = isShort ? `${nakedHex.slice(0, 1)}${nakedHex.slice(0, 1)}` : nakedHex.slice(0, 2);
  const twoDigitHexG = isShort ? `${nakedHex.slice(1, 2)}${nakedHex.slice(1, 2)}` : nakedHex.slice(2, 4);
  const twoDigitHexB = isShort ? `${nakedHex.slice(2, 3)}${nakedHex.slice(2, 3)}` : nakedHex.slice(4, 6);
  const twoDigitHexA = ((isShort ? `${nakedHex.slice(3, 4)}${nakedHex.slice(3, 4)}` : nakedHex.slice(6, 8)) || 'ff');

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA,
  };
};

const hexToDecimal = (hex: string) => parseInt(hex, 16);

const hexesToDecimals: RGBAFunction = ({
  r, g, b, a,
}): RGBA => ({
  r: hexToDecimal(r),
  g: hexToDecimal(g),
  b: hexToDecimal(b),
  a: +((hexToDecimal(a) / 255).toFixed(2)),
});

export const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n); // eslint-disable-line no-restricted-globals, max-len

const formatRgb = (decimalObject: RGBA, parameterA: unknown) => {
  const {
    r, g, b, a: parsedA,
  } = decimalObject;
  const a = isNumeric(parameterA) ? parameterA : parsedA;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/**
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param An alpha value to apply. (optional) ('0.5', '0.25')
 * @return An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */
export const hexToRgba = (hex: string, a: string = '1') => {
  const hashlessHex = removeHash(hex);
  const hexObject = parseHex(hashlessHex);
  const decimalObject = hexesToDecimals(hexObject);

  return formatRgb(decimalObject, a);
};