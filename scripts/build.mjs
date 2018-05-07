import fs from 'fs';
import { syntax, workbench } from '../config/scopes';
import colorScopes from '../src/colorScopes';
import {
  fontStyle as tokenScopesStyles,
  foreground as tokenScopesForeground,
} from '../src/tokenScopes';
import terminalColours from '../src/terminalColours';

const template = {
  name: 'Plastic',
  colors: {
    // Workbench colours
    ...Object.keys(colorScopes).reduce((acc, uiColour) => {
      const uiItem = colorScopes[uiColour];
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
    // Terminal colours
    ...terminalColours,
  },
  tokenColors: [
    // Syntax colours
    ...Object.keys(tokenScopesForeground).map(scopeName => {
      const scopes = tokenScopesForeground[scopeName];
      return {
        name: scopeName,
        scope: scopes,
        settings: {
          foreground: syntax[scopeName],
        },
      };
    }, {}),
    // Syntax styles
    ...Object.keys(tokenScopesStyles).map(scopeName => {
      const scopes = tokenScopesStyles[scopeName];
      return {
        name: scopeName,
        scope: scopes,
        settings: {
          fontStyle: scopeName,
        },
      };
    }, {}),
  ],
};

const json = JSON.stringify(template, null, 2);

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () =>
  console.log('done')
);
