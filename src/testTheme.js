import tinycolor from 'tinycolor2';
import test from './utils/test';

const testTheme = theme => {
  test(theme)
    .pass('File loads')
    .fail('Could not read theme.yaml file');

  const { name, palette } = theme;

  test(name)
    .pass('Name present')
    .fail('Name missing');

  test(typeof name === 'string')
    .pass('Name is a string')
    .fail('Theme name must be a string');

  test(name.startsWith('Plastic'))
    .pass('Name begins with "Plastic"')
    .fail('Theme name must begin with "Plastic"');

  test(palette && typeof palette === 'object')
    .pass('Palette')
    .fail('Palette not available');

  [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'bright_one',
    'bright_two',
    'bright_three',
    'bright_four',
    'bright_five',
    'bright_six',
  ].forEach(num => {
    const hex = palette[num];
    test(hex && typeof hex === 'string' && tinycolor(hex).getFormat() === 'hex')
      .pass(`${num}`)
      .fail(
        `${num}: make sure palette colour uses a hexadecimal string, e.g. "#000000"`
      );
  });
};

export default testTheme;
