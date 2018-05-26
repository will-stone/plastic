// import fs from 'fs';
// import { colours as tokenColours, styles as tokenStyles } from './syntax';
// import workbenchColours from './workbench';
import readThemeYaml from './utils/readThemeYaml';
import test from './utils/test';

const themeFile = 'theme.yaml';
const theme = readThemeYaml(themeFile);

test(theme)
  .pass('File loads.')
  .fail('Could not read theme.yaml file.');

const { name } = theme;

test(name)
  .pass('Name present.')
  .fail('Name missing.');

test(typeof name === 'string')
  .pass('Name is a string.')
  .fail('Theme name must be a string.');

test(name.startsWith('Plastic'))
  .pass('Name begins with "Plastic".')
  .fail('Theme name must begin with "Plastic"');

const internalColours = readThemeYaml('src/colours.yaml');
console.log({ ...internalColours, ...theme.colours });

// const workbench = readThemeYaml('src/workbench.yaml');
// console.log(workbench);

// const template = {
//   name: 'Plastic v2 Beta',
//   colors: {
//     // Workbench colours
//     ...Object.keys(workbenchColours).reduce((acc, workbenchColour) => {
//       const scopes = workbenchColours[workbenchColour];
//       return {
//         ...acc,
//         ...scopes.reduce((acc, scope) => {
//           return {
//             ...acc,
//             [scope]: workbenchColour,
//           };
//         }, {}),
//       };
//     }, {}),
//   },
//   tokenColors: [
//     // Syntax colours
//     ...Object.keys(tokenColours).map(tokenColour => {
//       const scopes = tokenColours[tokenColour];
//       return {
//         name: tokenColour,
//         scope: scopes,
//         settings: {
//           foreground: tokenColour,
//         },
//       };
//     }, {}),
//     // Syntax styles
//     ...Object.keys(tokenStyles).map(tokenStyle => {
//       const scopes = tokenStyles[tokenStyle];
//       return {
//         name: tokenStyle,
//         scope: scopes,
//         settings: {
//           fontStyle: tokenStyle,
//         },
//       };
//     }, {}),
//   ],
// };

// const json = JSON.stringify(template, null, 2);

// fs.writeFile('out/plastic-theme-v2-beta.json', json, 'utf8', () =>
//   /* eslint-disable no-console, no-undef */
//   console.log('done')
// );
