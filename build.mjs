import fs from 'fs';
import {
  colours as tokenColours,
  styles as tokenStyles,
} from './config/syntax';
import workbenchColours from './config/workbench';
import yaml from 'js-yaml';

class build {
  constructor() {
    const theme = this.readUserTheme();
    console.log(theme);
  }

  readUserTheme() {
    try {
      return yaml.safeLoad(fs.readFileSync('config/public.yaml', 'utf8'));
    } catch (e) {
      console.log(e);
      process.exit();
    }
  }
}

new build();

const template = {
  name: 'Plastic v2 Beta',
  colors: {
    // Workbench colours
    ...Object.keys(workbenchColours).reduce((acc, workbenchColour) => {
      const scopes = workbenchColours[workbenchColour];
      return {
        ...acc,
        ...scopes.reduce((acc, scope) => {
          return {
            ...acc,
            [scope]: workbenchColour,
          };
        }, {}),
      };
    }, {}),
  },
  tokenColors: [
    // Syntax colours
    ...Object.keys(tokenColours).map(tokenColour => {
      const scopes = tokenColours[tokenColour];
      return {
        name: tokenColour,
        scope: scopes,
        settings: {
          foreground: tokenColour,
        },
      };
    }, {}),
    // Syntax styles
    ...Object.keys(tokenStyles).map(tokenStyle => {
      const scopes = tokenStyles[tokenStyle];
      return {
        name: tokenStyle,
        scope: scopes,
        settings: {
          fontStyle: tokenStyle,
        },
      };
    }, {}),
  ],
};

const json = JSON.stringify(template, null, 2);

fs.writeFile('themes/plastic-theme-v2-beta.json', json, 'utf8', () =>
  /* eslint-disable no-console, no-undef */
  console.log('done')
);
