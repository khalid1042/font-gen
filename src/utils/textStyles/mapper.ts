const baseChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const baseCharsNoNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function createMapper(mapStr: string, includeNumbers = false) {
  const base = includeNumbers ? baseChars : baseCharsNoNum;
  // Use Array.from to correctly handle surrogate pairs in unicode strings
  const mapArray = Array.from(mapStr);
  
  return (text: string) => {
    return text.split('').map(char => {
      const index = base.indexOf(char);
      if (index !== -1 && index < mapArray.length) {
        return mapArray[index];
      }
      return char;
    }).join('');
  };
}
