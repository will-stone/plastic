import {
  BLUE,
  BRIGHT_BLACK,
  BRIGHT_WHITE,
  BRIGHT_YELLOW,
  CYAN,
  GREEN,
  MAGENTA,
  RED,
  WHITE,
  YELLOW,
} from './colours';

export default {
  [BLUE]: ['storage', 'support.class'],
  [BRIGHT_BLACK]: [
    'punctuation.terminator',
    'comment',
    'punctuation.definition.comment', // start and end of comment blocks
  ],
  [BRIGHT_WHITE]: ['support.type', 'support.variable', 'variable'],
  [BRIGHT_YELLOW]: [
    'entity.name.tag',
    'variable.language', // this
  ],
  [CYAN]: ['constant', 'keyword.other'],
  [GREEN]: ['string', 'markup.inline'],
  [MAGENTA]: ['entity.name', 'support.type'],
  [RED]: [
    'entity.name.section', // markdown headings' text
    'keyword',
    'punctuation.definition.heading', // markdown headings' hashes
    'punctuation.definition.keyword', // css @ in @media queries
  ],
  [WHITE + 'aa']: ['meta.brace', 'punctuation'],
  [YELLOW]: [
    'entity',
    'entity.name.function',
    'support.function',
    'punctuation.definition.entity', // css . and # for classes and IDs
  ],
};
