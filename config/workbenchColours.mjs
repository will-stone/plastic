import {
  BLACK,
  BLUE,
  BRIGHT_BLUE,
  BRIGHT_RED,
  BRIGHT_WHITE,
  BRIGHT_YELLOW,
  BUNKER,
  TRANSPARENT,
  TRUE_WHITE,
  WHITE,
  WOODSMOKE,
} from './colours';

export default {
  [TRUE_WHITE]: ['activityBar.foreground', 'activityBarBadge.foreground'],
  [TRANSPARENT]: [
    'editor.findMatchBackground',
    'editor.findMatchHighlightBackground',
    'editor.lineHighlightBorder',
    'editor.wordHighlightBackground',
    'editor.wordHighlightStrongBackground',
  ],
  [WHITE]: [
    'editor.foreground',
    'editorCursor.foreground',
    'peekViewResult.selectionForeground',
    'statusBar.foreground',
    'tab.inactiveForeground',
    'terminal.foreground',
    'titleBar.inactiveForeground',
  ],
  [BRIGHT_WHITE]: [
    'editorActiveLineNumber.foreground',
    'editor.findMatchHighlightBorder',
    'list.activeSelectionForeground',
    'tab.activeForeground',
    'titleBar.activeForeground',
  ],
  [WHITE + '22']: [
    'editor.lineHighlightBackground',
    'editorIndentGuide.activeBackground',
    'editorRuler.foreground',
    'editorSuggestWidget.selectedBackground',
    'editorWhitespace.foreground',
    'peekViewEditor.matchHighlightBackground',
    'peekViewResult.matchHighlightBackground',
    'peekViewResult.selectionBackground',
    'scrollbarSlider.background',
    'tab.hoverBackground',
  ],
  [WHITE + '33']: [
    'editor.selectionBackground',
    'editorLineNumber.foreground',
    'scrollbarSlider.activeBackground',
    'scrollbarSlider.hoverBackground',
  ],
  [BUNKER]: [
    'contrastBorder',
    'dropdown.border',
    'editorGroup.border',
    'editorIndentGuide.background',
    'editorOverviewRuler.border',
    'input.background',
    'panel.border',
    'tab.border',
    'widget.shadow',
  ],
  [BLUE]: [
    'activityBarBadge.background',
    'button.background',
    'editor.findMatchBorder',
    'editor.wordHighlightBorder',
    'editor.wordHighlightStrongBorder',
    'editorBracketMatch.border',
    'editorHoverWidget.border',
    'editorSuggestWidget.border',
    'focusBorder',
    'inputOption.activeBorder',
    'peekView.border',
  ],
  [BLACK]: [
    'activityBar.background',
    'editor.background',
    'list.activeSelectionBackground',
    'list.focusBackground',
    'list.hoverBackground',
    'list.inactiveSelectionBackground',
    'sideBarSectionHeader.background',
    'statusBar.background',
    'tab.activeBackground',
    'titleBar.activeBackground',
    'titleBar.inactiveBackground',
  ],
  [WOODSMOKE]: [
    'activityBar.dropBackground',
    'debugToolBar.background',
    'dropdown.background',
    'editorGroup.background',
    'editorGroupHeader.tabsBackground',
    'editorHoverWidget.background',
    'editorSuggestWidget.background',
    'editorWidget.background',
    'notificationCenterHeader.background',
    'notifications.background',
    'panel.background',
    'peekViewEditor.background',
    'peekViewResult.background',
    'peekViewTitle.background',
    'sideBar.background',
    'statusBar.debuggingBackground',
    'statusBar.noFolderBackground',
    'statusBarItem.hoverBackground',
    'tab.inactiveBackground',
  ],
  [BRIGHT_BLUE]: [
    'editorInfo.foreground',
    'editorOverviewRuler.infoForeground',
    'inputValidation.infoBackground',
    'inputValidation.infoBorder',
  ],
  [BRIGHT_YELLOW]: [
    'editorOverviewRuler.warningForeground',
    'editorWarning.foreground',
    'inputValidation.warningBackground',
    'inputValidation.warningBorder',
  ],
  [BRIGHT_RED]: [
    'editorError.foreground',
    'editorOverviewRuler.errorForeground',
    'inputValidation.errorBackground',
    'inputValidation.errorBorder',
  ],
};