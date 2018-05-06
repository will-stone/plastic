import {
  BLACK,
  BLUE,
  BRIGHT_BLACK,
  BRIGHT_BLUE,
  BRIGHT_RED,
  BRIGHT_WHITE,
  BRIGHT_YELLOW,
  BUNKER,
  CYAN,
  GREEN,
  RED,
  TRANSPARENT,
  TRUE_WHITE,
  WHITE,
  WOODSMOKE,
  YELLOW,
} from './colours';

export const syntax = {
  storage: BLUE,
  primitive: CYAN,
  string: GREEN,
  function: YELLOW,
  tag: BRIGHT_YELLOW,
  keyword: RED,
  variable: BRIGHT_WHITE,
  text: WHITE,
  comment: WHITE + 'aa',
  punctuation: WHITE + 'aa',
  terminator: BRIGHT_BLACK,
};

export const workbench = {
  WHITE: TRUE_WHITE,
  TRANSPARENT: TRANSPARENT,
  text: WHITE,
  activeText: BRIGHT_WHITE,
  highlight: BRIGHT_BLACK + '77',
  activeHighlight: WHITE + '99',
  trim: BUNKER, // contrast / borders
  activeTrim: BLUE,
  main: BLACK,
  panel: WOODSMOKE,
  error: BRIGHT_RED,
  warning: BRIGHT_YELLOW,
  info: BRIGHT_BLUE,
};
