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
  red: '#ff0015', // Red
  white: '#d2d6db', // Iron
  yellow: '#e5c07b', // Harvest Gold
};

const other = {
  brightGray: '#3e4451',
  woodsmoke: '#181a1f',
  bunker: '#080a0f',
};

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
  punctuation: bright.black,
};

const ui = {
  activeFront: bright.white, // text / numbers on badges etc.
  activeTrim: normal.blue, //
  front: normal.white,
  muted: other.brightGray,
  main: normal.black,
  panel: other.woodsmoke,
  trim: other.bunker,
  error: bright.red,
  warning: bright.yellow,
  info: bright.blue,
};

const template = {
  name: 'Plastic',
  colors: {
    'activityBar.background': ui.main,
    'activityBar.dropBackground': ui.panel,
    'activityBar.foreground': '#ffffff',
    'activityBarBadge.background': ui.activeTrim,
    'activityBarBadge.foreground': '#ffffff',
    'button.background': ui.activeTrim,
    contrastBorder: ui.trim,
    'debugToolBar.background': ui.panel,
    'dropdown.background': ui.panel,
    'dropdown.border': ui.trim,
    'editor.background': ui.main,
    'editor.findMatchBackground': ui.front + 'aa',
    'editor.findMatchHighlightBackground': ui.front + '77',
    'editor.foreground': ui.front,
    'editor.lineHighlightBackground': ui.muted + '77',
    'editor.selectionBackground': ui.front + 'aa',
    'editor.wordHighlightBackground': '#00000000',
    'editor.wordHighlightBorder': ui.activeTrim,
    'editor.wordHighlightStrongBackground': '#00000000',
    'editor.wordHighlightStrongBorder': ui.activeFront,
    'editorActiveLineNumber.foreground': ui.front,
    'editorBracketMatch.border': ui.activeTrim,
    'editorCursor.foreground': ui.front,
    'editorError.foreground': ui.error,
    'editorGroup.background': ui.panel,
    'editorGroup.border': ui.trim,
    'editorGroupHeader.tabsBackground': ui.panel,
    'editorHoverWidget.background': ui.panel,
    'editorHoverWidget.border': ui.activeTrim,
    'editorIndentGuide.background': ui.muted,
    'editorInfo.foreground': ui.info,
    'editorLineNumber.foreground': ui.muted,
    'editorOverviewRuler.border': ui.trim,
    'editorOverviewRuler.errorForeground': ui.error,
    'editorOverviewRuler.infoForeground': ui.info,
    'editorOverviewRuler.warningForeground': ui.warning,
    'editorRuler.foreground': ui.muted,
    'editorSuggestWidget.background': ui.panel,
    'editorSuggestWidget.border': ui.activeTrim,
    'editorSuggestWidget.selectedBackground': ui.muted,
    'editorWarning.foreground': ui.warning,
    'editorWhitespace.foreground': ui.muted,
    'editorWidget.background': ui.panel,
    focusBorder: ui.activeTrim,
    'input.background': ui.trim,
    'inputOption.activeBorder': ui.activeTrim,
    'inputValidation.errorBackground': ui.error,
    'inputValidation.errorBorder': ui.error,
    'inputValidation.infoBackground': ui.info,
    'inputValidation.infoBorder': ui.info,
    'inputValidation.warningBackground': ui.warning,
    'inputValidation.warningBorder': ui.warning,
    'list.activeSelectionBackground': ui.main,
    'list.activeSelectionForeground': ui.activeFront,
    'list.focusBackground': '#2c313a',
    'list.hoverBackground': '#292d35',
    'list.inactiveSelectionBackground': ui.main,
    'notificationCenterHeader.background': ui.panel,
    'notifications.background': ui.panel,
    'panel.background': ui.panel,
    'panel.border': ui.trim,
    'peekView.border': ui.activeTrim,
    'peekViewEditor.background': ui.panel,
    'peekViewEditor.matchHighlightBackground': ui.muted,
    'peekViewResult.background': ui.panel,
    'peekViewResult.matchHighlightBackground': ui.muted,
    'peekViewResult.selectionBackground': ui.muted,
    'peekViewResult.selectionForeground': ui.front,
    'peekViewTitle.background': ui.panel,
    'scrollbarSlider.activeBackground': ui.activeFront + '77',
    'scrollbarSlider.background': ui.muted + '99',
    'scrollbarSlider.hoverBackground': ui.muted + 'aa',
    'sideBar.background': ui.panel,
    'sideBarSectionHeader.background': ui.main,
    'statusBar.background': ui.main,
    'statusBar.debuggingBackground': ui.panel,
    'statusBar.foreground': '#9da5b4',
    'statusBar.noFolderBackground': ui.panel,
    'statusBarItem.hoverBackground': ui.panel,
    'tab.activeBackground': ui.main,
    'tab.activeForeground': ui.activeFront,
    'tab.border': ui.trim,
    'tab.inactiveBackground': ui.panel,
    'tab.inactiveForeground': ui.front,
    'tab.hoverBackground': ui.muted,
    'terminal.ansiBlack': normal.black,
    'terminal.ansiBlue': normal.blue,
    'terminal.ansiBrightBlack': bright.black,
    'terminal.ansiBrightBlue': bright.blue,
    'terminal.ansiBrightCyan': bright.cyan,
    'terminal.ansiBrightGreen': bright.green,
    'terminal.ansiBrightMagenta': bright.magenta,
    'terminal.ansiBrightRed': bright.red,
    'terminal.ansiBrightWhite': bright.white,
    'terminal.ansiBrightYellow': bright.yellow,
    'terminal.ansiCyan': normal.cyan,
    'terminal.ansiGreen': normal.green,
    'terminal.ansiMagenta': normal.magenta,
    'terminal.ansiRed': normal.red,
    'terminal.ansiWhite': normal.white,
    'terminal.ansiYellow': normal.yellow,
    'terminal.foreground': ui.front,
    'titleBar.activeBackground': ui.main,
    'titleBar.activeForeground': ui.activeFront,
    'titleBar.inactiveBackground': ui.main,
    'titleBar.inactiveForeground': ui.front,
    'widget.shadow': ui.trim,
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

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () => console.log('done'));
