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
  // LAVENDER,
} from './colours';

export default {
  // punctuation
  [CADET_BLUE]: ['meta.brace', 'punctuation'],
  // storage words (const, var, class etc.)
  [CORNFLOWER_BLUE]: ['storage', 'support.class', 'support.constant'],
  // numbers
  [FOUNTAIN_BLUE]: ['constant', 'keyword.other', 'support.type'],
  // variables
  [IRON]: ['support.type.property-name', 'support.variable', 'variable'],
  // tags and
  [HARVEST_GOLD]: [
    'entity.name',
    'variable.language', // this
  ],
  [OLIVINE]: ['string', 'markup.inline'],
  [SHUTTLE_GRAY]: [
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
    'punctuation.terminator.statement', // semicolons - bleugh
  ],
  [SUNGLO]: [
    'keyword',
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  [WHISKEY]: [
    'entity',
    'entity.name.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
    'support.function',
  ],
};
