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
  whiskey,
} = palette

// TODO is there an official theme type that can be used for the return type?
export function getMainTheme(deprioritised = false): unknown {
  return {
    $schema: 'vscode://schemas/color-theme',
    name: 'Plastic',
    type: 'dark',

    semanticHighlighting: true,
    semanticTokenColors: {},

    colors,
    tokenColors: [
      // Syntax
      ...[
        // comments
        [
          [
            'comment',
            // start and end of comment blocks
            'punctuation.definition.comment',
          ],
          shuttleGray,
        ],

        // functions
        [['entity.name.function', 'support.function'], lavender],

        // import, export, return etc.
        [
          [
            'keyword',
            // css @ in @media queries
            'punctuation.definition.keyword',
            // this
            'variable.language',
          ],
          sunglo,
        ],

        // primitives
        [['constant', 'support.constant'], fountainBlue],

        // const, var, class etc. and React JSX component tag
        [
          [
            'storage',
            // console and JSX custom components
            'support.class',
            // ReScript components
            'entity.name.namespace',
          ],
          cornflowerBlue,
        ],

        // anything in quotes
        [
          [
            // inline code in markdown
            'markup.inline.raw.string',
            'string',
          ],
          olivine,
        ],

        // html tags and types
        [
          [
            'entity.name.section',
            'entity.name.tag',
            'entity.name.type',
            'support.type',
          ],
          harvestGold,
        ],

        // variables
        [
          [
            // css property names
            'support.type.property-name',
            'support.variable',
            'variable',
          ],
          ghost,
        ],

        // Other
        [
          [
            'entity.other',
            // css . and # for CSS classes and IDs
            'punctuation.definition.entity',
            'support.other',
          ],
          whiskey,
        ],

        [
          ['meta.brace', 'punctuation'],
          deprioritised ? shuttleGray : cadetBlue,
        ],
      ].map(([scope, foreground]) => ({
        scope,
        settings: { foreground },
      })),

      // Font styles
      ...[
        // bold
        [
          [
            'markup.bold',
            'punctuation.definition.bold',
            // css ID
            'entity.other.attribute-name.id',
          ],
          'bold',
        ],

        // italic
        [
          ['comment', 'markup.italic', 'punctuation.definition.italic'],
          'italic',
        ],
      ].map(([scope, style]) => ({
        name: style,
        scope,
        settings: { fontStyle: style },
      })),
    ],
  }
}
