import c from './colours';

export const syntax = {
  comments: c.SHUTTLE_GRAY,
  punctuation: c.CADET_BLUE,
  variables: c.IRON,
};

export const colours = {
  comments: [
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
    'punctuation.terminator.statement', // semicolons - bleugh
  ],
  functions: [
    'entity',
    'entity.name.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
    'support.function',
  ],
  keywords: [
    'keyword',
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  primitives: ['constant', 'keyword.other', 'support.type'],
  punctuation: ['meta.brace', 'punctuation'],
  storage: ['storage', 'support.class', 'support.constant'],
  strings: ['string', 'markup.inline'],
  tags: [
    'entity.name',
    'variable.language', // this
  ],
  variables: ['support.type.property-name', 'support.variable', 'variable'],
};

export const styles = {
  bold: [
    'markup.bold',
    'punctuation.definition.bold',
    'entity.other.attribute-name.id', // css ID
  ],
  italic: ['comment', 'markup.italic', 'punctuation.definition.italic'],
};
