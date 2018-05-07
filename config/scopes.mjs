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
  comment: BRIGHT_BLACK,
  punctuation: WHITE + 'aa',
  terminator: BRIGHT_BLACK,
};

export const workbench = {
  WHITE: TRUE_WHITE,
  TRANSPARENT: TRANSPARENT,
  foreground: WHITE,
  activeForeground: BRIGHT_WHITE,
  highlight: WHITE + '22',
  activeHighlight: WHITE + '33',
  trim: BUNKER, // contrast / borders
  activeTrim: BLUE,
  main: BLACK,
  panel: WOODSMOKE,
  error: BRIGHT_RED,
  warning: BRIGHT_YELLOW,
  info: BRIGHT_BLUE,
};
