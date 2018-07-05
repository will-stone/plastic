const pkg = require('package.json');

console.log(pkg);

const compileTheme = (theme, config, deprioritised = false) => {
  const palette = {
    ...theme.palette,
    ...config.palette,
  };

  const ui = {
    ...theme.ui,
    ...config.ui,
  };

  // workbench
  const colors = {
    // Terminal
    ...{
      'terminal.ansiBlack': palette[theme.terminal.black],
      'terminal.ansiBlue': palette[theme.terminal.blue],
      'terminal.ansiCyan': palette[theme.terminal.cyan],
      'terminal.ansiGreen': palette[theme.terminal.green],
      'terminal.ansiMagenta': palette[theme.terminal.magenta],
      'terminal.ansiRed': palette[theme.terminal.red],
      'terminal.ansiYellow': palette[theme.terminal.yellow],
      'terminal.ansiWhite': palette[theme.terminal.white],
      'terminal.ansiBrightBlack': palette[theme.terminal.bright_black],
      'terminal.ansiBrightBlue': palette[theme.terminal.bright_blue],
      'terminal.ansiBrightCyan': palette[theme.terminal.bright_cyan],
      'terminal.ansiBrightGreen': palette[theme.terminal.bright_green],
      'terminal.ansiBrightMagenta': palette[theme.terminal.bright_magenta],
      'terminal.ansiBrightRed': palette[theme.terminal.bright_red],
      'terminal.ansiBrightYellow': palette[theme.terminal.bright_yellow],
      'terminal.ansiBrightWhite': palette[theme.terminal.bright_white],
    },
    ...Object.keys(config.workbench).reduce((acc, workbenchCategory) => {
      const workbenchGroup = config.workbench[workbenchCategory];

      return {
        ...acc,
        ...workbenchGroup.reduce((acc, scope) => {
          return {
            ...acc,
            [scope]: palette[ui[workbenchCategory]],
          };
        }, {}),
      };
    }, {}),
  };

  const syntax = {
    ...theme.syntax,
    ...(deprioritised ? theme.deprioritised_syntax : {}),
  };

  const tokenColors = [
    // Syntax colours
    ...Object.keys(config.scopes).map(syntaxCategory => {
      const scopes = config.scopes[syntaxCategory];
      return {
        name: syntaxCategory,
        scope: scopes,
        settings: {
          foreground: palette[syntax[syntaxCategory]],
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

  return JSON.stringify(template, null, 2);
};

module.exports = compileTheme;
