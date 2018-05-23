import fs from 'fs';
import {
  colours as tokenColours,
  styles as tokenStyles,
} from './config/syntax';
import workbenchColours from './config/workbench';
import yaml from 'js-yaml';

class Build {
  readUserTheme(themeFile) {
    try {
      return yaml.safeLoad(fs.readFileSync(themeFile, 'utf8'));
    } catch (e) {
      this.errorAndExit(`Could not read theme.yaml file: ${e}`);
    }
  }

  themeName(name) {
    if (!name) {
      this.errorAndExit('Theme name missing');
    }
    if (typeof name !== 'string') {
      this.errorAndExit('Theme name must be a string');
    }
    // const nameBeginsWithPlastic =
  }

  errorAndExit(msg) {
    console.log(msg);
    process.exit();
  }

  init(themeFile) {
    const theme = this.readUserTheme(themeFile);
    console.log(theme);
  }
}

const themeFile = 'theme.yaml';
const build = new Build();
build.init(themeFile);

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
