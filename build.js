const fs = require('fs')
// var tinycolor = require('tinycolor2')

const normal = {
  black: '#21252b', // Shark
  blue: '#61afef', // Cornflower Blue
  cyan: '#56b6c2', // Fountain Blue
  green: '#98c379', // Olivine
  magenta: '#c678dd', // Lavender
  red: '#e06c75', // Sunglo
  white: '#abb2bf', // Cadet Blue
  yellow: '#e5c07b', // Harvest Gold
}

const bright = {
  black: '#3e4451', // Bright Gray
  blue: '#008cff', // Azure Radiance
  cyan: '#00e1ff', // Cyan / Aqua
  green: '#6aff00', // Bright Green
  magenta: '#c300ff', // Electric Violet
  red: '#ff0015', // Red
  white: '#d2d6db', // Iron
  yellow: '#ffa600', // Web Orange
}

const other = {
  whiskey: '#d19a66',
  shuttleGray: '#5c6370',
  woodsmoke: '#181a1f',
  bunker: '#080a0f',
}

const scopes = {
  storage: normal.blue,
  primitive: normal.cyan,
  string: normal.green,
  function: other.whiskey,
  tag: normal.yellow,
  keyword: normal.red,
  variable: bright.white,
  text: normal.white,
  comment: other.shuttleGray,
  punctuation: normal.white,
}

const ui = {
  activeFront: '#ffffff', // text / numbers on badges etc.
  activeBack: normal.red, //
  front: normal.white,
  muted: bright.black,
  main: normal.black,
  panel: other.woodsmoke,
  trim: other.bunker,
  error: bright.red,
  warning: bright.yellow,
  info: bright.blue,
}

const template = {
  name: 'Plastic',
  colors: {
    'activityBar.background': ui.main,
    'activityBar.dropBackground': ui.panel,
    'activityBar.foreground': ui.front,
    'activityBarBadge.background': ui.activeBack,
    'activityBarBadge.foreground': ui.activeFront,
    'button.background': ui.activeBack,
    contrastBorder: ui.trim,
    'debugToolBar.background': ui.panel,
    'dropdown.background': ui.panel,
    'dropdown.border': ui.trim,
    'editor.background': ui.main,
    'editor.findMatchBackground': '#42557B',
    'editor.findMatchHighlightBackground': '#314365',
    'editor.foreground': normal.white,
    'editor.lineHighlightBackground': ui.muted + '55',
    'editor.selectionBackground': ui.muted,
    'editor.wordHighlightBackground': '#00000000',
    'editor.wordHighlightBorder': scopes.storage,
    'editor.wordHighlightStrongBackground': '#00000000',
    'editor.wordHighlightStrongBorder': bright.white,
    'editorActiveLineNumber.foreground': normal.white,
    'editorBracketMatch.border': scopes.storage,
    'editorCursor.foreground': normal.white,
    'editorError.foreground': ui.error,
    'editorGroup.background': ui.panel,
    'editorGroup.border': ui.trim,
    'editorGroupHeader.tabsBackground': ui.panel,
    'editorHoverWidget.background': ui.panel,
    'editorHoverWidget.border': scopes.storage,
    'editorIndentGuide.background': ui.muted,
    'editorInfo.foreground': ui.info,
    'editorLineNumber.foreground': ui.muted,
    'editorOverviewRuler.border': ui.trim,
    'editorOverviewRuler.errorForeground': ui.error,
    'editorOverviewRuler.infoForeground': ui.info,
    'editorOverviewRuler.warningForeground': ui.warning,
    'editorRuler.foreground': ui.muted,
    'editorSuggestWidget.background': ui.panel,
    'editorSuggestWidget.border': scopes.storage,
    'editorSuggestWidget.selectedBackground': ui.panel,
    'editorWarning.foreground': ui.warning,
    'editorWhitespace.foreground': ui.muted,
    'editorWidget.background': ui.panel,
    focusBorder: scopes.storage,
    'input.background': ui.trim,
    'inputOption.activeBorder': scopes.storage,
    'inputValidation.errorBackground': ui.error,
    'inputValidation.errorBorder': ui.error,
    'inputValidation.infoBackground': ui.info,
    'inputValidation.infoBorder': ui.info,
    'inputValidation.warningBackground': ui.warning,
    'inputValidation.warningBorder': ui.warning,
    'list.activeSelectionBackground': ui.main,
    'list.activeSelectionForeground': bright.white,
    'list.focusBackground': '#2c313a',
    'list.hoverBackground': '#292d35',
    'list.inactiveSelectionBackground': ui.main,
    'notificationCenterHeader.background': ui.panel,
    'notifications.background': ui.panel,
    'panel.background': ui.panel,
    'panel.border': ui.trim,
    'peekView.border': scopes.storage,
    'peekViewEditor.background': ui.panel,
    'peekViewEditor.matchHighlightBackground': ui.muted,
    'peekViewResult.background': ui.panel,
    'peekViewResult.matchHighlightBackground': ui.muted,
    'peekViewResult.selectionBackground': ui.panel,
    'peekViewResult.selectionForeground': normal.white,
    'peekViewTitle.background': ui.panel,
    'scrollbarSlider.activeBackground': bright.white + '77',
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
    'tab.activeForeground': normal.white,
    'tab.border': ui.trim,
    'tab.inactiveBackground': ui.panel,
    'tab.inactiveForeground': bright.black,
    'terminal.ansiBlack': ui.panel,
    'terminal.ansiBlue': scopes.storage,
    'terminal.ansiBrightBlack': bright.black,
    'terminal.ansiBrightBlue': '#008cff',
    'terminal.ansiBrightCyan': '#00e1ff',
    'terminal.ansiBrightGreen': '#6aff00',
    'terminal.ansiBrightMagenta': '#c300ff',
    'terminal.ansiBrightRed': '#ff0015',
    'terminal.ansiBrightWhite': bright.white,
    'terminal.ansiBrightYellow': '#ffa600',
    'terminal.ansiCyan': scopes.primitive,
    'terminal.ansiGreen': scopes.string,
    'terminal.ansiMagenta': '#C678DD',
    'terminal.ansiRed': normal.red,
    'terminal.ansiWhite': normal.white,
    'terminal.ansiYellow': normal.yellow,
    'terminal.foreground': scopes.text,
    'titleBar.activeBackground': ui.main,
    'titleBar.activeForeground': bright.white,
    'titleBar.inactiveBackground': ui.main,
    'titleBar.inactiveForeground': normal.white,
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
}

const json = JSON.stringify(template, null, 2)

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () =>
  console.log('done')
)
