const tinycolor = require("tinycolor2");
const test = require("./utils/test");

const testTheme = theme => {
  test("theme.yaml", theme);

  const { name, palette, syntax, workbench } = theme;

  test("Name", name && typeof name === "string");

  test('Name begins with "Plastic"', name.startsWith("Plastic"));

  test("Palette", palette && typeof palette === "object");

  test("Palette colours", Object.keys(palette).length === 12);

  [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "bright_one",
    "bright_two",
    "bright_three",
    "bright_four",
    "bright_five",
    "bright_six"
  ].forEach(num => {
    const hex = palette[num];
    test(
      `- ${num}`,
      hex && typeof hex === "string" && tinycolor(hex).getFormat() === "hex"
    );
  });

  test("Syntax", syntax && typeof syntax === "object");

  test("Syntax categories", Object.keys(syntax).length === 6);

  ["functions", "keywords", "primitives", "storage", "strings", "tags"].forEach(
    category => {
      test(`- ${category}`, syntax[category] && palette[syntax[category]]);
    }
  );

  test("Workbench", workbench && typeof workbench === "object");

  test("Workbench categories", Object.keys(workbench).length === 4);

  ["primary", "secondary", "warning", "error"].forEach(category => {
    test(`- ${category}`, workbench[category] && palette[workbench[category]]);
  });
};

module.exports = testTheme;
