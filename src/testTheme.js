import test from './utils/test';

const testTheme = theme => {
  test(theme)
    .pass('File loads.')
    .fail('Could not read theme.yaml file.');

  const { name, colours } = theme;

  test(name)
    .pass('Name present.')
    .fail('Name missing.');

  test(typeof name === 'string')
    .pass('Name is a string.')
    .fail('Theme name must be a string.');

  test(name.startsWith('Plastic'))
    .pass('Name begins with "Plastic".')
    .fail('Theme name must begin with "Plastic".');

  // test(colours.blue && typeof colours.blue === 'string')
  //   .pass('Blue colour set.')
  //   .fail('Blue colour not set correctly.');
};

export default testTheme;
