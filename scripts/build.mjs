import fs from 'fs';
import {
  BLACK,
  BLUE,
  BRIGHT_BLACK,
  BRIGHT_BLUE,
  BRIGHT_CYAN,
  BRIGHT_GREEN,
  BRIGHT_MAGENTA,
  BRIGHT_RED,
  BRIGHT_WHITE,
  BRIGHT_YELLOW,
  CYAN,
  GREEN,
  MAGENTA,
  RED,
  WHITE,
  YELLOW,
} from '../config/colours';
import { syntax, workbench } from '../config/scopes';
import workbenchTemplate from '../src/workbenchTemplate';

const template = {
  name: 'Plastic',
  colors: {
    ...Object.keys(workbenchTemplate).reduce((acc, uiColour) => {
      const uiItem = workbenchTemplate[uiColour];
      return {
        ...acc,
        ...uiItem.reduce((acc, scopeName) => {
          return {
            ...acc,
            [scopeName]: workbench[uiColour],
          };
        }, {}),
      };
    }, {}),
    'terminal.ansiBlack': BLACK,
    'terminal.ansiBlue': BLUE,
    'terminal.ansiCyan': CYAN,
    'terminal.ansiGreen': GREEN,
    'terminal.ansiMagenta': MAGENTA,
    'terminal.ansiRed': RED,
    'terminal.ansiWhite': WHITE,
    'terminal.ansiYellow': YELLOW,
    'terminal.ansiBrightBlack': BRIGHT_BLACK,
    'terminal.ansiBrightBlue': BRIGHT_BLUE,
    'terminal.ansiBrightCyan': BRIGHT_CYAN,
    'terminal.ansiBrightGreen': BRIGHT_GREEN,
    'terminal.ansiBrightMagenta': BRIGHT_MAGENTA,
    'terminal.ansiBrightRed': BRIGHT_RED,
    'terminal.ansiBrightWhite': BRIGHT_WHITE,
    'terminal.ansiBrightYellow': BRIGHT_YELLOW,
  },
  tokenColors: [
    {
      name: 'Punctuation',
      scope: ['meta.brace', 'punctuation'],
      settings: {
        foreground: syntax.punctuation,
      },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation.terminator'],
      settings: {
        foreground: syntax.terminator,
      },
    },
    {
      name: 'Variable',
      scope: ['support.type', 'support.variable', 'variable'],
      settings: {
        foreground: syntax.variable,
      },
    },
    {
      name: 'Storage',
      scope: ['storage', 'support.class'],
      settings: {
        foreground: syntax.storage,
      },
    },
    {
      name: 'Primitive',
      scope: ['constant', 'keyword.other'],
      settings: {
        foreground: syntax.primitive,
      },
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment', // start and end of comment blocks
      ],
      settings: {
        foreground: syntax.comment,
      },
    },
    {
      name: 'String',
      scope: ['string', 'markup.inline'],
      settings: {
        foreground: syntax.string,
      },
    },
    {
      name: 'Function',
      scope: [
        'entity',
        'support.function',
        'punctuation.definition.entity', // css . and # for classes and IDs
      ],
      settings: {
        foreground: syntax.function,
      },
    },
    {
      name: 'Tag',
      scope: [
        'entity.name.tag',
        'variable.language', // this
      ],
      settings: {
        foreground: syntax.tag,
      },
    },
    {
      name: 'Keyword',
      scope: [
        'entity.name.section', // markdown headings' text
        'keyword',
        'punctuation.definition.heading', // markdown headings' hashes
        'punctuation.definition.keyword', // css @ in @media queries
      ],
      settings: {
        foreground: syntax.keyword,
      },
    },
    {
      name: 'Bold',
      scope: [
        'markup.bold',
        'punctuation.definition.bold',
        'entity.other.attribute-name.id', // css ID
      ],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Italic',
      scope: ['comment', 'markup.italic', 'punctuation.definition.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },
  ],
};

const json = JSON.stringify(template, null, 2);

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () =>
  console.log('done')
);
