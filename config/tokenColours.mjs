import c from './colours';

export default {
  // punctuation
  [c.CADET_BLUE]: ['meta.brace', 'punctuation'],
  // storage words (const, var, class etc.)
  [c.CORNFLOWER_BLUE]: ['storage', 'support.class', 'support.constant'],
  // numbers
  [c.FOUNTAIN_BLUE]: ['constant', 'keyword.other', 'support.type'],
  // variables
  [c.IRON]: ['support.type.property-name', 'support.variable', 'variable'],
  // tags and
  [c.HARVEST_GOLD]: [
    'entity.name',
    'variable.language', // this
  ],
  [c.OLIVINE]: ['string', 'markup.inline'],
  [c.SHUTTLE_GRAY]: [
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
    'punctuation.terminator.statement', // semicolons - bleugh
  ],
  [c.SUNGLO]: [
    'keyword',
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  [c.WHISKEY]: [
    'entity',
    'entity.name.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
    'support.function',
  ],
};
