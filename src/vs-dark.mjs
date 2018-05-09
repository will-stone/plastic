import darkVs from './dark_vs.json';
import darkPlus from './dark_plus.json';

const tokenColors = [...darkVs.tokenColors, ...darkPlus.tokenColors];

// const colours = tokenColors.reduce((acc, tc) => {
//   const foreground = tc.settings.foreground;
//   if (foreground) {
//     return [...acc, foreground];
//   }
//   return acc;
// }, []);

const replacedColours = tokenColors.reduce((acc, tokenColor) => {
  const foreground =
    tokenColor.settings.foreground &&
    tokenColor.settings.foreground.toLowerCase();
  if (foreground === '#9cdcfe') {
    tokenColor.settings.foreground = '#d2d6db';
  }
  return [...acc, tokenColor];
}, []);

console.log(JSON.stringify(replacedColours, null, 2));

// const uniqColours = [...new Set(colours.map(colour => colour.toLowerCase()))];

// console.log(uniqColours);

// const c = [
//   '#d4d4d4',
//   '#000080',
//   '#608b4e',
//   '#569cd6',
//   '#b5cea8',
//   '#646695',
//   '#9cdcfe', // '#d2d6db'
//   '#ce9178',
//   '#6796e6',
//   '#808080',
//   '#dcdcaa',
//   '#d7ba7d',
//   '#4ec9b0',
//   '#c586c0',
//   '#d16969',
//   '#f44747',
// ];

// const scopes = vsDark.reduce((acc, item) => {
//   const scopesArray = Array.isArray(item.scope) ? item.scope : [item.scope];
//   return [...acc, ...scopesArray];
// }, []);

// const dups = scopes.reduce((acc, item) => {
//   const numOfTimesInScopes = scopes.filter(scp => scp === item).length;
//   if (numOfTimesInScopes > 1) {
//     return [...acc, item];
//   }

//   return acc;
// }, []);

// console.log(dups);
