export function getAvailableColorsAndSizes(Colors, sizeQuantities) {
    const availableColors = [];
    const availableSizes = {};
  
    Colors.forEach((color, index) => {
      const sizesAvailable = Object.keys(sizeQuantities).filter(size => sizeQuantities[size][index] > 0);
      if (sizesAvailable.length > 0) {
        availableColors.push(color);
        availableSizes[color] = sizesAvailable;
      }
    });
  
    return { availableColors, availableSizes };
  }
  
  

  