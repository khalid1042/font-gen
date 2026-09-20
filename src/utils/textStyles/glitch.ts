export const transformGlitch = (text: string) => {
  const zalgo = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'];
  return text.split('').map(c => {
    if (c === ' ') return c;
    const z1 = zalgo[Math.floor(Math.random() * zalgo.length)];
    const z2 = zalgo[Math.floor(Math.random() * zalgo.length)];
    return c + z1 + z2;
  }).join('');
};