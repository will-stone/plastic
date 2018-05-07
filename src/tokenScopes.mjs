export const foreground = {
  punctuation: ['meta.brace', 'punctuation'],
  terminator: ['punctuation.terminator'],
  variable: ['support.type', 'support.variable', 'variable'],
  storage: ['storage', 'support.class'],
  primitive: ['constant', 'keyword.other'],
  comment: [
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
  ],
  string: ['string', 'markup.inline'],
  function: [
    'entity',
    'support.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
  ],
  tag: [
    'entity.name.tag',
    'variable.language', // this
  ],
  keyword: [
    'entity.name.section', // markdown headings' text
    'keyword',
    'punctuation.definition.heading', // markdown headings' hashes
    'punctuation.definition.keyword', // css @ in @media queries
  ],
};

export const fontStyle = {
  bold: [
    'markup.bold',
    'punctuation.definition.bold',
    'entity.other.attribute-name.id', // css ID
  ],
  italic: ['comment', 'markup.italic', 'punctuation.definition.italic'],
};
