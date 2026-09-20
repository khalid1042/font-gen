
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
