export type StyleType = {
  id: string;
  name: string;
  category: string;
  transform: (text: string) => string;
};

// Character maps for different styles
const maps = {
  bold: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
  italic: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡',
  boldItalic: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕',
  script: '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
  boldScript: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩',
  fraktur: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅┋𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',
  boldFraktur: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
  doubleStruck: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
  monospace: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
  circled: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
  smallCaps: 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ',
};

const baseChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// Helper for map strings that don't have numbers
const baseCharsNoNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function createMapper(mapStr: string, includeNumbers = false) {
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

export const stylesMap: StyleType[] = [
  { id: 'bold', name: 'Negrita', category: 'Letras Negritas', transform: createMapper(maps.bold, true) },
  { id: 'italic', name: 'Cursiva Clásica', category: 'Letras Cursivas', transform: createMapper(maps.italic, false) },
  { id: 'boldItalic', name: 'Cursiva Negrita', category: 'Letras Cursivas', transform: createMapper(maps.boldItalic, false) },
  { id: 'script', name: 'Cursiva Elegante', category: 'Letras Cursivas', transform: createMapper(maps.script, false) },
  { id: 'boldScript', name: 'Cursiva Manuscrita', category: 'Letras Cursivas', transform: createMapper(maps.boldScript, false) },
  { id: 'fraktur', name: 'Gótica', category: 'Letras Góticas', transform: createMapper(maps.fraktur, false) },
  { id: 'boldFraktur', name: 'Gótica Negrita', category: 'Letras Góticas', transform: createMapper(maps.boldFraktur, false) },
  { id: 'doubleStruck', name: 'Doble Trazo', category: 'Letras Decorativas', transform: createMapper(maps.doubleStruck, true) },
  { id: 'monospace', name: 'Monospace', category: 'Letras Especiales', transform: createMapper(maps.monospace, true) },
  { id: 'circled', name: 'Círculos', category: 'Letras Decorativas', transform: createMapper(maps.circled, false) },
  { id: 'smallCaps', name: 'Versalitas', category: 'Letras Decorativas', transform: createMapper(maps.smallCaps, false) },
  { 
    id: 'bubble', 
    name: 'Burbuja', 
    category: 'Letras Decorativas', 
    transform: (text: string) => text.split('').map(c => {
      const idx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c);
      if (idx !== -1) {
        return Array.from('🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩')[idx];
      }
      return c;
    }).join('')
  },
  {
    id: 'cursiveDecorated',
    name: 'Cursiva con Símbolos',
    category: 'Letras Cursivas',
    transform: (text: string) => {
      const mapper = createMapper(maps.script, false);
      return `✨ ${mapper(text)} ✨`;
    }
  },
  {
    id: 'cursiveDelicate',
    name: 'Cursiva Delicada',
    category: 'Letras Cursivas',
    transform: (text: string) => {
      const mapper = createMapper(maps.italic, false);
      return `~ ${mapper(text)} ~`;
    }
  }
];

export function transformText(text: string, styleId: string): string {
  const found = stylesMap.find((s) => s.id === styleId);
  if (found) {
    return found.transform(text);
  }
  return text;
}

