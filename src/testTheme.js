import test from './utils/test';

const testTheme = theme => {
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
};

export default testTheme;
