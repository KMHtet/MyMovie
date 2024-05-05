export const isNumber = (value: string | number): boolean => {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
};

export function isUndefined(e: any | Object) {
    switch (e) {
      case 'undefined':
        return true;
      case 'NaN':
        return true;
      case NaN:
        return true;
      case undefined:
        return true;
      case '':
        return true;
      case null:
        return true;
      case 'null':
        return true;
      case false:
        return true;
      case 'false':
        return true;
      default:
        return false;
    }
  }