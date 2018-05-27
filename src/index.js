import compileTheme from './compileTheme';
import testTheme from './testTheme';
import readYaml from './utils/readYaml';

const themeFile = 'theme.yaml';
const theme = readYaml(themeFile);

testTheme(theme);

const config = readYaml('src/config.yaml');

compileTheme(theme, config);
