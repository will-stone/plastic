import fs from 'fs';

const compileTheme = (theme, config) => {
  const coloursLookup = { ...theme.colours, ...config.colours };

  // workbench
  const colors = Object.keys(config.workbench).reduce(
    (acc, workbenchColour) => {
      const workbenchGroup = config.workbench[workbenchColour];

      return {
        ...acc,
        ...workbenchGroup.reduce((acc, scope) => {
          return {
            ...acc,
            [scope]: coloursLookup[workbenchColour],
          };
        }, {}),
      };
    },
    {}
  );

  const syntax = { ...theme.syntax, ...config.syntax };

  const tokenColors = [
    // Syntax colours
    ...Object.keys(config.scopes).map(syntaxCategory => {
      const scopes = config.scopes[syntaxCategory];
      return {
        name: syntaxCategory,
        scope: scopes,
        settings: {
          foreground: coloursLookup[syntax[syntaxCategory]],
        },
      };
    }, {}),
    // Syntax styles
    ...Object.keys(config.styles).map(style => {
      const scopes = config.styles[style];
      return {
        name: style,
        scope: scopes,
        settings: {
          fontStyle: style,
        },
      };
    }, {}),
  ];

  const template = {
    name: theme.name,
    colors,
    tokenColors,
  };

  const json = JSON.stringify(template, null, 2);

  fs.writeFile('out/plastic-theme-v2-beta.json', json, 'utf8', () =>
    /* eslint-disable no-console, no-undef */
    console.log('done')
  );
};

export default compileTheme;
