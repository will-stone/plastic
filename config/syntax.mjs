import c from './colours';

export const colours = {
  // punctuation
  [c.CADET_BLUE]: ['meta.brace', 'punctuation'],
  // storage words (const, var, class etc.)
  [c.CORNFLOWER_BLUE]: ['storage', 'support.class', 'support.constant'],
  // numbers
  [c.FOUNTAIN_BLUE]: ['constant', 'keyword.other', 'support.type'],
  // tags and
  [c.HARVEST_GOLD]: [
    'entity.name',
    'variable.language', // this
  ],
  // variables
  [c.IRON]: ['support.type.property-name', 'support.variable', 'variable'],
  // Strings
  [c.OLIVINE]: ['string', 'markup.inline'],
  // Comments
  [c.SHUTTLE_GRAY]: [
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
    'punctuation.terminator.statement', // semicolons - bleugh
  ],
  // Keywords
  [c.SUNGLO]: [
    'keyword',
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  // Functions
  [c.WHISKEY]: [
    'entity',
    'entity.name.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
    'support.function',
  ],
};

export const styles = {
  bold: [
    'markup.bold',
    'punctuation.definition.bold',
    'entity.other.attribute-name.id', // css ID
  ],
  italic: ['comment', 'markup.italic', 'punctuation.definition.italic'],
};
