const compileTheme = (theme, config, deprioritised = false) => {
  const coloursLookup = {
    ...theme.palette,
    ...config.palette,
    ...Object.keys(theme.workbench).reduce((acc, workbenchType) => {
      const colourName = theme.workbench[workbenchType];
      return {
        ...acc,
        [workbenchType]: theme.palette[colourName]
      };
    }, {})
  };

  // workbench
  const colors = Object.keys(config.workbench).reduce(
    (acc, workbenchColour) => {
      const workbenchGroup = config.workbench[workbenchColour];

      return {
        ...acc,
        ...workbenchGroup.reduce((acc, scope) => {
          return {
            ...acc,
            [scope]: coloursLookup[workbenchColour]
          };
        }, {})
      };
    },
    {}
  );

  const syntax = {
    ...theme.syntax,
    ...config.syntax,
    ...(deprioritised ? config.deprioritised_syntax : {})
  };

  const tokenColors = [
    // Syntax colours
    ...Object.keys(config.scopes).map(syntaxCategory => {
      const scopes = config.scopes[syntaxCategory];
      return {
        name: syntaxCategory,
        scope: scopes,
        settings: {
          foreground: coloursLookup[syntax[syntaxCategory]]
        }
      };
    }, {}),
    // Syntax styles
    ...Object.keys(config.styles).map(style => {
      const scopes = config.styles[style];
      return {
        name: style,
        scope: scopes,
        settings: {
          fontStyle: style
        }
      };
    }, {})
  ];

  const template = {
    name: theme.name,
    colors,
    tokenColors
  };

  return JSON.stringify(template, null, 2);
};

module.exports = compileTheme;
