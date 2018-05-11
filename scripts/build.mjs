import fs from 'fs';
import tokenColours from '../config/tokenColours';
import tokenStyles from '../config/tokenStyles';
import workbenchColours from '../config/workbenchColours';

// import oldTheme from '../themes/plastic-theme.json';

// const splitByColour = Object.keys(oldTheme.colors).reduce((acc, scope) => {
//   const colour = oldTheme.colors[scope].toLowerCase();
//   const registeredColours = Object.keys(acc);

//   const isColourRegistered = registeredColours.indexOf(colour) > -1;
//   const isTerminal = scope.startsWith('terminal');

//   if (!isTerminal) {
//     if (isColourRegistered) {
//       acc[colour].push(scope);
//     } else {
//       acc[colour] = [scope];
//     }
//   }

//   return acc;
// }, {});

// console.log(splitByColour);

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
