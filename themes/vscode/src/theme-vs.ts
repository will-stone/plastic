/* eslint-disable sort-keys -- copy-pasting VSCode themes, sorting would be too much overhead */

import { produce } from 'immer'

import { palette } from '../../../palette/index.js'
import { colors } from './colors.js'

const {
  cadetBlue,
  cornflowerBlue,
  fountainBlue,
  ghost,
  harvestGold,
  lavender,
  olivine,
  shuttleGray,
  sunglo,
} = palette

function colourReplacer(input: string): string | null {
  switch (input.toUpperCase()) {
    case '#6A9955':
      return shuttleGray

    case '#D4D4D4':
      return cadetBlue

    case '#C586C0':
      return sunglo

    case '#CE9178':
      return olivine

    case '#4FC1FF':
    case '#9CDCFE':
      return ghost

    case '#4EC9B0':
      return harvestGold

    case '#569CD6':
      return cornflowerBlue

    case '#DCDCAA':
      return lavender

    case '#B5CEA8':
      return fountainBlue

    default:
      return null
  }
}

function changeColours(theme: Record<string, any>): unknown {
  return produce(theme, (draft) => {
    if (draft.tokenColors) {
      for (const tokenColor of draft.tokenColors) {
        if (tokenColor.settings.foreground) {
          const replacement = colourReplacer(tokenColor.settings.foreground)

          if (replacement) {
            tokenColor.settings.foreground = replacement
          }
        }
      }
    }

    if (draft.semanticTokenColors) {
      for (const [name, value] of Object.entries(draft.semanticTokenColors)) {
        const replacement = colourReplacer(value as string)

        if (replacement) {
          draft.semanticTokenColors[name] = replacement
        }
      }
    }
  })
}

export function getDarkVSTheme(): unknown {
  return changeColours({
    $schema: 'vscode://schemas/color-theme',
    name: 'Dark (Visual Studio)',
    colors: {
      'checkbox.border': '#6B6B6B',
      'editor.background': '#1E1E1E',
      'editor.foreground': '#D4D4D4',
      'editor.inactiveSelectionBackground': '#3A3D41',
      'editorIndentGuide.background': '#404040',
      'editorIndentGuide.activeBackground': '#707070',
      'editor.selectionHighlightBackground': '#ADD6FF26',
      'list.dropBackground': '#383B3D',
      'activityBarBadge.background': '#007ACC',
      'sideBarTitle.foreground': '#BBBBBB',
      'input.placeholderForeground': '#A6A6A6',
      'menu.background': '#252526',
      'menu.foreground': '#CCCCCC',
      'menu.separatorBackground': '#454545',
      'menu.border': '#454545',
      'statusBarItem.remoteForeground': '#FFF',
      'statusBarItem.remoteBackground': '#16825D',
      'ports.iconRunningProcessForeground': '#369432',
      'sideBarSectionHeader.background': '#0000',
      'sideBarSectionHeader.border': '#ccc3',
      'tab.lastPinnedBorder': '#ccc3',
      'list.activeSelectionIconForeground': '#FFF',
      'terminal.inactiveSelectionBackground': '#3A3D41',
      'widget.border': '#303031',
    },
    tokenColors: [
      {
        scope: [
          'meta.embedded',
          'source.groovy.embedded',
          'string meta.image.inline.markdown',
        ],
        settings: {
          foreground: '#D4D4D4',
        },
      },
      {
        scope: 'emphasis',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'strong',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        scope: 'header',
        settings: {
          foreground: '#000080',
        },
      },
      {
        scope: 'comment',
        settings: {
          foreground: '#6A9955',
        },
      },
      {
        scope: 'constant.language',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: [
          'constant.numeric',
          'variable.other.enummember',
          'keyword.operator.plus.exponent',
          'keyword.operator.minus.exponent',
        ],
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'constant.regexp',
        settings: {
          foreground: '#646695',
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'entity.name.tag.css',
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: [
          'entity.other.attribute-name.class.css',
          'entity.other.attribute-name.class.mixin.css',
          'entity.other.attribute-name.id.css',
          'entity.other.attribute-name.parent-selector.css',
          'entity.other.attribute-name.pseudo-class.css',
          'entity.other.attribute-name.pseudo-element.css',
          'source.css.less entity.other.attribute-name.id',
          'entity.other.attribute-name.scss',
        ],
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'invalid',
        settings: {
          foreground: '#f44747',
        },
      },
      {
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: '#569cd6',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
          foreground: '#569cd6',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.strikethrough',
        settings: {
          fontStyle: 'strikethrough',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'punctuation.definition.quote.begin.markdown',
        settings: {
          foreground: '#6A9955',
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: '#6796e6',
        },
      },
      {
        scope: 'markup.inline.raw',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        name: 'brackets of XML/HTML tags',
        scope: 'punctuation.definition.tag',
        settings: {
          foreground: '#808080',
        },
      },
      {
        scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'storage.type',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: ['storage.modifier', 'keyword.operator.noexcept'],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: ['string', 'meta.embedded.assembly'],
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.tag',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.value',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#d16969',
        },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        scope: [
          'support.type.vendored.property-name',
          'support.type.property-name',
          'variable.css',
          'variable.scss',
          'variable.other.less',
          'source.coffee.embedded',
        ],
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.control',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        scope: [
          'keyword.operator.new',
          'keyword.operator.expression',
          'keyword.operator.cast',
          'keyword.operator.sizeof',
          'keyword.operator.alignof',
          'keyword.operator.typeid',
          'keyword.operator.alignas',
          'keyword.operator.instanceof',
          'keyword.operator.logical.python',
          'keyword.operator.wordlike',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: [
          'punctuation.section.embedded.begin.php',
          'punctuation.section.embedded.end.php',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'support.function.git-rebase',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        name: 'coloring of the Java import and package identifiers',
        scope: [
          'storage.modifier.import.java',
          'variable.language.wildcard.java',
          'storage.modifier.package.java',
        ],
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        name: 'this.self',
        scope: 'variable.language',
        settings: {
          foreground: '#569cd6',
        },
      },
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: '#d4d4d4',
      stringLiteral: '#ce9178',
      customLiteral: '#D4D4D4',
      numberLiteral: '#b5cea8',
    },
  })
}

export function getDarkPlusTheme(): unknown {
  return changeColours({
    $schema: 'vscode://schemas/color-theme',
    name: 'Dark+ (default dark)',
    include: './dark_vs.json',
    tokenColors: [
      {
        name: 'Function declarations',
        scope: [
          'entity.name.function',
          'support.function',
          'support.constant.handlebars',
          'source.powershell variable.other.member',
          'entity.name.operator.custom-literal',
        ],
        settings: {
          foreground: '#DCDCAA',
        },
      },
      {
        name: 'Types declaration and references',
        scope: [
          'support.class',
          'support.type',
          'entity.name.type',
          'entity.name.namespace',
          'entity.other.attribute',
          'entity.name.scope-resolution',
          'entity.name.class',
          'storage.type.numeric.go',
          'storage.type.byte.go',
          'storage.type.boolean.go',
          'storage.type.string.go',
          'storage.type.uintptr.go',
          'storage.type.error.go',
          'storage.type.rune.go',
          'storage.type.cs',
          'storage.type.generic.cs',
          'storage.type.modifier.cs',
          'storage.type.variable.cs',
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
          'storage.type.groovy',
          'storage.type.annotation.groovy',
          'storage.type.parameters.groovy',
          'storage.type.generic.groovy',
          'storage.type.object.array.groovy',
          'storage.type.primitive.array.groovy',
          'storage.type.primitive.groovy',
        ],
        settings: {
          foreground: '#4EC9B0',
        },
      },
      {
        name: 'Types declaration and references, TS grammar specific',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
        ],
        settings: {
          foreground: '#4EC9B0',
        },
      },
      {
        name: 'Control flow / Special keywords',
        scope: [
          'keyword.control',
          'source.cpp keyword.operator.new',
          'keyword.operator.delete',
          'keyword.other.using',
          'keyword.other.operator',
          'entity.name.operator',
        ],
        settings: {
          foreground: '#C586C0',
        },
      },
      {
        name: 'Variable and parameter name',
        scope: [
          'variable',
          'meta.definition.variable.name',
          'support.variable',
          'entity.name.variable',
          'constant.other.placeholder',
        ],
        settings: {
          foreground: '#9CDCFE',
        },
      },
      {
        name: 'Constants and enums',
        scope: ['variable.other.constant', 'variable.other.enummember'],
        settings: {
          foreground: '#4FC1FF',
        },
      },
      {
        name: 'Object keys, TS grammar specific',
        scope: ['meta.object-literal.key'],
        settings: {
          foreground: '#9CDCFE',
        },
      },
      {
        name: 'CSS property value',
        scope: [
          'support.constant.property-value',
          'support.constant.font-name',
          'support.constant.media-type',
          'support.constant.media',
          'constant.other.color.rgb-value',
          'constant.other.rgb-value',
          'support.constant.color',
        ],
        settings: {
          foreground: '#CE9178',
        },
      },
      {
        name: 'Regular expression groups',
        scope: [
          'punctuation.definition.group.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.character-class.regexp',
          'punctuation.character.set.begin.regexp',
          'punctuation.character.set.end.regexp',
          'keyword.operator.negation.regexp',
          'support.other.parenthesis.regexp',
        ],
        settings: {
          foreground: '#CE9178',
        },
      },
      {
        scope: [
          'constant.character.character-class.regexp',
          'constant.other.character-class.set.regexp',
          'constant.other.character-class.regexp',
          'constant.character.set.regexp',
        ],
        settings: {
          foreground: '#d16969',
        },
      },
      {
        scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
        settings: {
          foreground: '#DCDCAA',
        },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'constant.character',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'entity.name.label',
        settings: {
          foreground: '#C8C8C8',
        },
      },
    ],
    semanticTokenColors: {
      newOperator: '#C586C0',
      stringLiteral: '#ce9178',
      customLiteral: '#DCDCAA',
      numberLiteral: '#b5cea8',
    },
  })
}

export function getDarkPlusExperimentalTheme(): unknown {
  return changeColours({
    $schema: 'vscode://schemas/color-theme',
    name: 'Dark+ (Experimental)',
    include: './dark_plus.json',
    colors: {
      'activityBar.activeBorder': '#0078d4',
      'activityBar.background': '#181818',
      'activityBar.border': '#ffffff15',
      'activityBar.foreground': '#d7d7d7',
      'activityBar.inactiveForeground': '#ffffff80',
      'activityBarBadge.background': '#0078d4',
      'activityBarBadge.foreground': '#ffffff',
      'badge.background': '#0078d4',
      'badge.foreground': '#ffffff',
      'button.background': '#0078d4',
      'button.border': '#ffffff12',
      'button.foreground': '#ffffff',
      'button.hoverBackground': '#0078d4e6',
      'button.secondaryBackground': '#FFFFFF0F',
      'button.secondaryForeground': '#cccccc',
      'button.secondaryHoverBackground': '#ffffff15',
      'checkbox.background': '#313131',
      'checkbox.border': '#ffffff1f',
      'debugToolBar.background': '#181818',
      'descriptionForeground': '#8b949e',
      'diffEditor.insertedLineBackground': '#23863633',
      'diffEditor.insertedTextBackground': '#2386364d',
      'diffEditor.removedLineBackground': '#da363333',
      'diffEditor.removedTextBackground': '#da36334d',
      'dropdown.background': '#313131',
      'dropdown.border': '#ffffff1f',
      'dropdown.foreground': '#cccccc',
      'dropdown.listBackground': '#313131',
      'editor.background': '#1f1f1f',
      'editor.findMatchBackground': '#9e6a03',
      'editor.foreground': '#cccccc',
      'editorGroup.border': '#ffffff17',
      'editorGroupHeader.tabsBackground': '#181818',
      'editorGroupHeader.tabsBorder': '#ffffff15',
      'editorGutter.addedBackground': '#2ea043',
      'editorGutter.deletedBackground': '#f85149',
      'editorGutter.modifiedBackground': '#0078d4',
      'editorInlayHint.background': '#8b949e33',
      'editorInlayHint.foreground': '#8b949e',
      'editorInlayHint.typeBackground': '#8b949e33',
      'editorInlayHint.typeForeground': '#8b949e',
      'editorLineNumber.activeForeground': '#cccccc',
      'editorLineNumber.foreground': '#6e7681',
      'editorOverviewRuler.border': '#010409',
      'editorWidget.background': '#1f1f1f',
      'errorForeground': '#f85149',
      'focusBorder': '#0078d4',
      'foreground': '#cccccc',
      'icon.foreground': '#cccccc',
      'input.background': '#ffffff0f',
      'input.border': '#ffffff1f',
      'input.foreground': '#cccccc',
      'input.placeholderForeground': '#ffffff79',
      'inputOption.activeBackground': '#2489db82',
      'inputOption.activeBorder': '#2488db',
      'keybindingLabel.foreground': '#cccccc',
      'list.activeSelectionBackground': '#ffffff0f',
      'list.activeSelectionIconForeground': '#ffffff',
      'list.activeSelectionForeground': '#ffffff',
      'menu.background': '#1f1f1f',
      'notificationCenterHeader.background': '#1f1f1f',
      'notificationCenterHeader.foreground': '#cccccc',
      'notifications.background': '#1f1f1f',
      'notifications.border': '#ffffff15',
      'notifications.foreground': '#cccccc',
      'panel.background': '#181818',
      'panel.border': '#ffffff15',
      'panelInput.border': '#ffffff15',
      'panelTitle.activeBorder': '#0078d4',
      'panelTitle.activeForeground': '#cccccc',
      'panelTitle.inactiveForeground': '#8b949e',
      'peekViewEditor.background': '#1f1f1f',
      'peekViewEditor.matchHighlightBackground': '#bb800966',
      'peekViewResult.background': '#1f1f1f',
      'peekViewResult.matchHighlightBackground': '#bb800966',
      'pickerGroup.border': '#ffffff15',
      'pickerGroup.foreground': '#8b949e',
      'progressBar.background': '#0078d4',
      'quickInput.background': '#1f1f1f',
      'quickInput.foreground': '#cccccc',
      'scrollbar.shadow': '#484f5833',
      'scrollbarSlider.activeBackground': '#6e768187',
      'scrollbarSlider.background': '#6e768133',
      'scrollbarSlider.hoverBackground': '#6e768145',
      'settings.dropdownBackground': '#313131',
      'settings.dropdownBorder': '#ffffff1f',
      'settings.headerForeground': '#ffffff',
      'settings.modifiedItemIndicator': '#bb800966',
      'sideBar.background': '#181818',
      'sideBar.border': '#ffffff15',
      'sideBar.foreground': '#cccccc',
      'sideBarSectionHeader.background': '#181818',
      'sideBarSectionHeader.border': '#ffffff15',
      'sideBarSectionHeader.foreground': '#cccccc',
      'sideBarTitle.foreground': '#cccccc',
      'statusBar.background': '#181818',
      'statusBar.border': '#ffffff15',
      'statusBar.debuggingBackground': '#0078d4',
      'statusBar.debuggingForeground': '#ffffff',
      'statusBar.foreground': '#cccccc',
      'statusBar.noFolderBackground': '#1f1f1f',
      'statusBarItem.focusBorder': '#0078d4',
      'statusBarItem.prominentBackground': '#6e768166',
      'statusBarItem.remoteBackground': '#0078d4',
      'statusBarItem.remoteForeground': '#ffffff',
      'tab.activeBackground': '#1f1f1f',
      'tab.activeBorder': '#1f1f1f',
      'tab.activeBorderTop': '#0078d4',
      'tab.activeForeground': '#ffffff',
      'tab.border': '#ffffff15',
      'tab.hoverBackground': '#1f1f1f',
      'tab.inactiveBackground': '#181818',
      'tab.inactiveForeground': '#ffffff80',
      'tab.unfocusedActiveBorder': '#1f1f1f',
      'tab.unfocusedActiveBorderTop': '#ffffff15',
      'tab.unfocusedHoverBackground': '#6e76811a',
      'terminal.foreground': '#cccccc',
      'terminal.tab.activeBorder': '#0078d4',
      'textBlockQuote.background': '#010409',
      'textBlockQuote.border': '#ffffff14',
      'textCodeBlock.background': '#6e768166',
      'textLink.activeForeground': '#40A6FF',
      'textLink.foreground': '#40A6FF',
      'textSeparator.foreground': '#21262d',
      'titleBar.activeBackground': '#181818',
      'titleBar.activeForeground': '#cccccc',
      'titleBar.border': '#ffffff15',
      'titleBar.inactiveBackground': '#1f1f1f',
      'titleBar.inactiveForeground': '#8b949e',
      'welcomePage.tileBackground': '#ffffff0f',
      'welcomePage.progress.foreground': '#0078d4',
      'widgetBorder': '#ffffff15',
    },
  })
}

export function getVSTheme(): unknown {
  return {
    $schema: 'vscode://schemas/color-theme',
    include: './dark_plus_experimental.json',
    name: 'Plastic',
    colors,
  }
}
