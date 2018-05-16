import {
  CADET_BLUE,
  CORNFLOWER_BLUE,
  FOUNTAIN_BLUE,
  HARVEST_GOLD,
  IRON,
  LAVENDER,
  OLIVINE,
  SHUTTLE_GRAY,
  SUNGLO,
  WHISKEY,
} from './colours';

export default {
  [CADET_BLUE]: ['meta.brace', 'punctuation'],
  [CORNFLOWER_BLUE]: ['storage'],
  [FOUNTAIN_BLUE]: ['constant', 'keyword.other'],
  [HARVEST_GOLD]: [
    'entity.name.tag',
    'variable.language', // this
  ],
  [IRON]: ['support.variable', 'variable'],
  [LAVENDER]: ['entity.name', 'support.type', 'support.class'],
  [OLIVINE]: ['string', 'markup.inline'],
  [SHUTTLE_GRAY]: [
    'punctuation.terminator',
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
  ],
  [SUNGLO]: [
    'entity.name.section', // markdown headings' text
    'keyword',
    'punctuation.definition.heading', // markdown headings' hashes
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  [WHISKEY]: [
    'entity',
    'entity.name.function',
    'support.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
  ],
};
