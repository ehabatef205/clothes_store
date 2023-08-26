export function getAvailableColorsAndSizes(sizeable, colors, quantity) {
  var toreturn = {}
  console.log(!colors && !sizeable)
  if (!colors && !sizeable) {
    console.log(quantity)
    toreturn.avilable = quantity?.avilable > 0
  }
  if (colors ? !sizeable : sizeable) {
    const Available = Object.keys(quantity).filter(unit => quantity[unit] > 0);

    toreturn = Available;
  }
  if (colors && sizeable) {
    const sizesAvailable = Object.keys(quantity)
    for (const size of sizesAvailable) {
      const colorsavailable = Object.keys(quantity[size]).filter(color => quantity[size][color] > 0)
      if (colorsavailable?.length > 0) {

        toreturn[size] = {};
        for (const color in colorsavailable) {
          console.log(color)
          toreturn[size][colorsavailable[color]] = 1
        }
      }
    }

  }
  return toreturn

}



