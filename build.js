const fs = require('fs');
// var tinycolor = require('tinycolor2')

const normal = {
  black: '#21252b', // Shark
  blue: '#61afef', // Cornflower Blue
  cyan: '#56b6c2', // Fountain Blue
  green: '#98c379', // Olivine
  magenta: '#c678dd', // Lavender
  red: '#e06c75', // Sunglo
  white: '#abb2bf', // Cadet Blue
  yellow: '#d19a66', // Whiskey
};

const bright = {
  black: '#5c6370', // Shuttle Gray
  blue: '#008cff', // Azure Radiance
  cyan: '#00e1ff', // Cyan / Aqua
  green: '#6aff00', // Bright Green
  magenta: '#c300ff', // Electric Violet
  red: '#c62d42', // Red
  white: '#d2d6db', // Iron
  yellow: '#e5c07b', // Harvest Gold
};

const other = {
  woodsmoke: '#181a1f',
  bunker: '#080a0f',
};

const TRANSPARENT = '#00000000';
const WHITE = '#ffffffff';

const scopes = {
  storage: normal.blue,
  primitive: normal.cyan,
  string: normal.green,
  function: normal.yellow,
  tag: bright.yellow,
  keyword: normal.red,
  variable: bright.white,
  text: normal.white,
  comment: bright.black,
  punctuation: normal.white + 'aa',
  terminator: bright.black,
};

const ui = {
  WHITE: WHITE,
  TRANSPARENT: TRANSPARENT,
  text: normal.white,
  activeText: bright.white,
  highlight: bright.black + '77',
  activeHighlight: normal.white + '99',
  trim: other.bunker, // contrast / borders
  activeTrim: normal.blue,
  main: normal.black,
  panel: other.woodsmoke,
  error: bright.red,
  warning: bright.yellow,
  info: bright.blue,
};

/**
 * TEMPLATE BUILDER
 */

const uiScopes = {
  WHITE: ['activityBar.foreground', 'activityBarBadge.foreground'],
  TRANSPARENT: [
    'editor.findMatchBackground',
    'editor.findMatchHighlightBackground',
    'editor.lineHighlightBorder',
    'editor.wordHighlightBackground',
    'editor.wordHighlightStrongBackground',
  ],
  text: [
    'editor.findMatchHighlightBorder',
    'editor.foreground',
    'editorCursor.foreground',
    'peekViewResult.selectionForeground',
    'statusBar.foreground',
    'tab.inactiveForeground',
    'terminal.foreground',
    'titleBar.inactiveForeground',
  ],
  activeText: [
    'editorActiveLineNumber.foreground',
    'list.activeSelectionForeground',
    'tab.activeForeground',
    'titleBar.activeForeground',
  ],
  highlight: [
    'editor.lineHighlightBackground',
    'editorIndentGuide.activeBackground',
    'editorLineNumber.foreground',
    'editorRuler.foreground',
    'editorSuggestWidget.selectedBackground',
    'editorWhitespace.foreground',
    'peekViewEditor.matchHighlightBackground',
    'peekViewResult.matchHighlightBackground',
    'peekViewResult.selectionBackground',
    'scrollbarSlider.background',
    'tab.hoverBackground',
  ],
  activeHighlight: [
    'editor.selectionBackground',
    'scrollbarSlider.activeBackground',
    'scrollbarSlider.hoverBackground',
  ],
  trim: [
    'contrastBorder',
    'dropdown.border',
    'editorGroup.border',
    'editorIndentGuide.background',
    'editorOverviewRuler.border',
    'input.background',
    'panel.border',
    'tab.border',
    'widget.shadow',
  ],
  activeTrim: [
    'activityBarBadge.background',
    'button.background',
    'editor.findMatchBorder',
    'editor.wordHighlightBorder',
    'editor.wordHighlightStrongBorder',
    'editorBracketMatch.border',
    'editorHoverWidget.border',
    'editorSuggestWidget.border',
    'focusBorder',
    'inputOption.activeBorder',
    'peekView.border',
  ],
  main: [
    'activityBar.background',
    'editor.background',
    'list.activeSelectionBackground',
    'list.focusBackground',
    'list.hoverBackground',
    'list.inactiveSelectionBackground',
    'sideBarSectionHeader.background',
    'statusBar.background',
    'tab.activeBackground',
    'titleBar.activeBackground',
    'titleBar.inactiveBackground',
  ],
  panel: [
    'activityBar.dropBackground',
    'debugToolBar.background',
    'dropdown.background',
    'editorGroup.background',
    'editorGroupHeader.tabsBackground',
    'editorHoverWidget.background',
    'editorSuggestWidget.background',
    'editorWidget.background',
    'notificationCenterHeader.background',
    'notifications.background',
    'panel.background',
    'peekViewEditor.background',
    'peekViewResult.background',
    'peekViewTitle.background',
    'sideBar.background',
    'statusBar.debuggingBackground',
    'statusBar.noFolderBackground',
    'statusBarItem.hoverBackground',
    'tab.inactiveBackground',
  ],
  info: [
    'editorInfo.foreground',
    'editorOverviewRuler.infoForeground',
    'inputValidation.infoBackground',
    'inputValidation.infoBorder',
  ],
  warning: [
    'editorOverviewRuler.warningForeground',
    'editorWarning.foreground',
    'inputValidation.warningBackground',
    'inputValidation.warningBorder',
  ],
  error: [
    'editorError.foreground',
    'editorOverviewRuler.errorForeground',
    'inputValidation.errorBackground',
    'inputValidation.errorBorder',
  ],
};

const uiToColor = uiItem => {
  uiItem.map();
  return colors;
};

const terminal = {
  normal: {
    'terminal.ansiBlack': normal.black,
    'terminal.ansiBlue': normal.blue,
    'terminal.ansiCyan': normal.cyan,
    'terminal.ansiGreen': normal.green,
    'terminal.ansiMagenta': normal.magenta,
    'terminal.ansiRed': normal.red,
    'terminal.ansiWhite': normal.white,
    'terminal.ansiYellow': normal.yellow,
  },
  bright: {
    'terminal.ansiBrightBlack': bright.black,
    'terminal.ansiBrightBlue': bright.blue,
    'terminal.ansiBrightCyan': bright.cyan,
    'terminal.ansiBrightGreen': bright.green,
    'terminal.ansiBrightMagenta': bright.magenta,
    'terminal.ansiBrightRed': bright.red,
    'terminal.ansiBrightWhite': bright.white,
    'terminal.ansiBrightYellow': bright.yellow,
  },
};

const template = {
  name: 'Plastic',
  colors: {
    ...templatePartials.WHITE,
    ...templatePartials.TRANSPARENT,
    ...templatePartials.text,
    ...templatePartials.activeText,
    ...templatePartials.highlight,
    ...templatePartials.activeHighlight,
    ...templatePartials.trim,
    ...templatePartials.activeTrim,
    ...templatePartials.main,
    ...templatePartials.panel,
    ...templatePartials.error,
    ...templatePartials.warning,
    ...templatePartials.info,
    ...terminal.normal,
    ...terminal.bright,
  },
  tokenColors: [
    {
      name: 'Punctuation',
      scope: ['meta.brace', 'punctuation'],
      settings: {
        foreground: scopes.punctuation,
      },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation.terminator'],
      settings: {
        foreground: scopes.terminator,
      },
    },
    {
      name: 'Variable',
      scope: ['support.type', 'support.variable', 'variable'],
      settings: {
        foreground: scopes.variable,
      },
    },
    {
      name: 'Storage',
      scope: ['storage', 'support.class'],
      settings: {
        foreground: scopes.storage,
      },
    },
    {
      name: 'Primitive',
      scope: ['constant', 'keyword.other'],
      settings: {
        foreground: scopes.primitive,
      },
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment', // start and end of comment blocks
      ],
      settings: {
        foreground: scopes.comment,
      },
    },
    {
      name: 'String',
      scope: ['string', 'markup.inline'],
      settings: {
        foreground: scopes.string,
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
        foreground: scopes.function,
      },
    },
    {
      name: 'Tag',
      scope: [
        'entity.name.tag',
        'variable.language', // this
      ],
      settings: {
        foreground: scopes.tag,
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
        foreground: scopes.keyword,
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
