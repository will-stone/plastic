import {
  CADET_BLUE,
  CORNFLOWER_BLUE,
  FOUNTAIN_BLUE,
  HARVEST_GOLD,
  IRON,
  OLIVINE,
  SHUTTLE_GRAY,
  SUNGLO,
  WHISKEY,
} from './colours';

export default {
  [CADET_BLUE]: ['meta.brace', 'punctuation'],
  [CORNFLOWER_BLUE]: ['storage', 'support.class'],
  [FOUNTAIN_BLUE]: ['constant', 'keyword.other'],
  [IRON]: ['support.variable', 'variable'],
  [HARVEST_GOLD]: [
    'entity.name',
    'support.type',
    'variable.language', // this
  ],
  [OLIVINE]: ['string', 'markup.inline'],
  [SHUTTLE_GRAY]: [
    'punctuation.terminator', // semicolons - bleugh
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
  ],
  [SUNGLO]: [
    'keyword',
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  [WHISKEY]: [
    'entity',
    'entity.name.function',
    'support.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
  ],
};
