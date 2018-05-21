import c from './colours';

export default {
  // punctuation
  [c.CADET_BLUE]: ['meta.brace', 'punctuation'],
  // numbers
  [c.FOUNTAIN_BLUE]: ['constant', 'keyword.other', 'support.type'],
  // tags and
  [c.HARVEST_GOLD]: [
    'entity.name',
    'variable.language', // this
  ],
  // variables
  [c.IRON]: ['support.type.property-name', 'support.variable', 'variable'],
  // storage words (const, var, class etc.)
  [c.JORDY_BLUE]: ['storage', 'support.class', 'support.constant'],
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
