const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/utils/textStyles');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const mapperPath = './mapper';

const stylesData = {
  twitter: `export const transformTwitter = (text: string) => text;`, 
  tiktok: `export const transformTikTok = (text: string) => text.split('').join('\u200B');`, 
  whatsapp: `export const transformWhatsApp = (text: string) => \`*\${text}*\`;`,
  bold: `import { createMapper } from '${mapperPath}';
const map = '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
export const transformBold = createMapper(map, true);`,
  cool: `import { createMapper } from '${mapperPath}';
const map = 'ꍏꌃꏳꂟꍟꄘꁅꃬꂑꈵꀘ꒒ꂵꈤꆂꉣꆰꋪꑄ꓅ꐇꏝꅐꇸꐞꁴꍏꌃꏳꂟꍟꄘꁅꃬꂑꈵꀘ꒒ꂵꈤꆂꉣꆰꋪꑄ꓅ꐇꏝꅐꇸꐞꁴ';
export const transformCool = createMapper(map, false);`,
  glitch: `export const transformGlitch = (text: string) => {
  const zalgo = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b', '\u0346', '\u031a'];
  return text.split('').map(c => {
    if (c === ' ') return c;
    const z1 = zalgo[Math.floor(Math.random() * zalgo.length)];
    const z2 = zalgo[Math.floor(Math.random() * zalgo.length)];
    return c + z1 + z2;
  }).join('');
};`,
  gothic: `import { createMapper } from '${mapperPath}';
const map = '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅┋𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ';
export const transformGothic = createMapper(map, false);`,
  small: `import { createMapper } from '${mapperPath}';
const map = 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ';
export const transformSmall = createMapper(map, false);`,
  graffiti: `import { createMapper } from '${mapperPath}';
const map = 'ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬץאչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬץאչ';
export const transformGraffiti = createMapper(map, false);`,
  squiggle: `import { createMapper } from '${mapperPath}';
const map = 'ąҍçժҽƒցհìյҟӀʍղօքզɾʂէմѵաղxyՀĄBÇDƐFGHįJKLMИOPQRSŦUVWXYZ';
export const transformSquiggle = createMapper(map, false);`,
  box: `import { createMapper } from '${mapperPath}';
const map = '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉';
export const transformBox = createMapper(map, false);`,
  carpenter: `import { createMapper } from '${mapperPath}';
const map = '卂乃匚刀乇下厶卄工丁长乚从几口尸㔿尺丂丅凵リ山乂丫乙卂乃匚刀乇下厶卄工丁长乚从几口尸㔿尺丂丅凵リ山乂丫乙';
export const transformCarpenter = createMapper(map, false);`,
  bubble: `import { createMapper } from '${mapperPath}';
const map = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ';
export const transformBubble = createMapper(map, false);`,
  cholas: `export const transformCholas = (text: string) => \`••.\u00B8\u00B8.\u2022*\u00B4\u00B8.\u2022*\u00B4 \${text} \`*\u2022.\u00B8\u00B4*\u2022.\u00B8\u00B8.••\`;`,
  rare: `import { createMapper } from '${mapperPath}';
const map = 'αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥΑΒCDEFGHIJKLMΝOPQRSTUVWΧYZ';
export const transformRare = createMapper(map, false);`,
  ugly: `import { createMapper } from '${mapperPath}';
const map = 'ልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃዚልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃዚ';
export const transformUgly = createMapper(map, false);`,
};

Object.entries(stylesData).forEach(([key, content]) => {
  fs.writeFileSync(path.join(dir, `${key}.ts`), content);
});

const indexContent = `
import { transformTwitter } from './twitter';
import { transformTikTok } from './tiktok';
import { transformWhatsApp } from './whatsapp';
import { transformBold } from './bold';
import { transformCool } from './cool';
import { transformGlitch } from './glitch';
import { transformGothic } from './gothic';
import { transformSmall } from './small';
import { transformGraffiti } from './graffiti';
import { transformSquiggle } from './squiggle';
import { transformBox } from './box';
import { transformCarpenter } from './carpenter';
import { transformBubble } from './bubble';
import { transformCholas } from './cholas';
import { transformRare } from './rare';
import { transformUgly } from './ugly';

export interface TextStyleDef {
  id: string;
  name: string;
  type: string;
  description: string;
  transform: (text: string) => string;
}

export const textStyles: TextStyleDef[] = [
  { id: 'twitter', name: 'Twitter', type: 'social', description: 'Twitter/X-inspired text style', transform: transformTwitter },
  { id: 'tiktok', name: 'TikTok', type: 'social', description: 'TikTok-inspired style', transform: transformTikTok },
  { id: 'whatsapp', name: 'WhatsApp', type: 'social', description: 'WhatsApp-inspired style', transform: transformWhatsApp },
  { id: 'bold', name: 'Bold type', type: 'unicode', description: 'Heavy/bold text', transform: transformBold },
  { id: 'cool', name: 'Cool', type: 'unicode', description: 'Decorative/cool Unicode-style text', transform: transformCool },
  { id: 'glitch', name: 'Glitch', type: 'effect', description: 'Glitch/distorted text', transform: transformGlitch },
  { id: 'gothic', name: 'Gothic', type: 'unicode', description: 'Gothic / blackletter text', transform: transformGothic },
  { id: 'small', name: 'Small', type: 'unicode', description: 'Small/superscript-style text', transform: transformSmall },
  { id: 'graffiti', name: 'Graffiti', type: 'unicode', description: 'Graffiti-inspired text', transform: transformGraffiti },
  { id: 'squiggle', name: 'Squiggle', type: 'unicode', description: 'Wavy/squiggly text', transform: transformSquiggle },
  { id: 'box', name: 'Box', type: 'unicode', description: 'Boxed characters', transform: transformBox },
  { id: 'carpenter', name: 'Carpenter', type: 'unicode', description: 'Carpenter/decorative lettering', transform: transformCarpenter },
  { id: 'bubble', name: 'Bubble', type: 'unicode', description: 'Bubble/circled characters', transform: transformBubble },
  { id: 'cholas', name: 'Cholas', type: 'effect', description: 'Decorative Cholas-style text', transform: transformCholas },
  { id: 'rare', name: 'Rare', type: 'unicode', description: 'Unusual/rare Unicode characters', transform: transformRare },
  { id: 'ugly', name: 'Ugly', type: 'unicode', description: 'Intentionally distorted/strange text', transform: transformUgly },
];
`;

fs.writeFileSync(path.join(dir, 'index.ts'), indexContent);
console.log('Styles generated');
