export const linuxGeneral = [
  {
    keys: ['F1'],
    action: 'Show command palette',
  },
  {
    keys: ['Ctrl', 'P'],
    action: 'Quick open, Go to file...',
  },
  {
    keys: ['Ctrl', 'Shift', 'N'],
    action: 'New window/instance',
  },
  {
    keys: ['Ctrl', 'W'],
    action: 'Close window/instance',
  },
  {
    keys: ['Ctrl', ','],
    action: 'User settings',
  },
];

export const linuxBasicEditing = [
  {
    keys: ['Ctrl', 'X'],
    action: 'Cut line',
  },
  {
    keys: ['Ctrl', 'C'],
    action: 'Copy line',
  },
  {
    keys: ['Alt', '↑ / ↓'],
    action: 'Move line up/down',
  },
  {
    keys: ['Ctrl', 'Shift', 'K'],
    action: 'Delete line',
  },
  {
    keys: ['Ctrl', 'Enter'],
    action: 'Insert line below',
  },
  {
    keys: ['Ctrl', 'Shift', 'Enter'],
    action: 'Insert line above',
  },
  {
    keys: ['Ctrl', 'Shift', '\\'],
    action: 'Jump to matching bracket',
  },
  {
    keys: ['Ctrl', '] / ['],
    action: 'Indent/Outdent line',
  },
  {
    keys: ['Home / End'],
    action: 'Go to beginning/end of line',
  },
  {
    keys: ['Ctrl', 'Home / End'],
    action: 'Go to beginning/end of file',
  },
  {
    keys: ['Ctrl', ' ↑ / ↓ '],
    action: 'Scroll line up/down',
  },
  {
    keys: ['Alt', 'PgUp / PgDn'],
    action: 'Scroll page up/down',
  },
  {
    keys: ['Ctrl', 'K', 'Ctrl', 'C'],
    action: 'Add line comment',
  },
  {
    keys: ['Ctrl', 'K', 'Ctrl', 'U'],
    action: 'Remove line comment',
  },
  {
    keys: ['Ctrl', '/'],
    action: 'Toggle line comment',
  },
  {
    keys: ['Ctrl', 'Shift', 'A'],
    action: 'Toggle block comment',
  },
];

export const linuxNavigation = [
  {
    keys: ['Ctrl', 'G'],
    action: 'Go to line...',
  },
  {
    keys: ['F8'],
    action: 'Go to next error or warning',
  },
  {
    keys: ['Shift', 'F8'],
    action: 'Go to previous error or warning',
  },
  {
    keys: ['Ctrl', 'Alt', '-'],
    action: 'Go back',
  },
  {
    keys: ['Ctrl', 'Shift', '-'],
    action: 'Go forward',
  },
];

export const linuxSearchAndReplace = [
  {
    keys: ['Ctrl', 'F'],
    action: 'Find',
  },
  {
    keys: ['Ctrl', 'H'],
    action: 'Replace',
  },
  {
    keys: ['F3'],
    action: 'Find next',
  },
  {
    keys: ['Shift', 'F3'],
    action: 'Find previous',
  },
  {
    keys: ['Alt', 'Enter'],
    action: 'Select all occurrences of Find match',
  },
];

export const linuxMultiCursorAndSelection = [
  {
    keys: ['Alt', 'click'],
    action: 'Insert cursor',
  },
  {
    keys: ['Shift', 'Alt', '↑ / ↓'],
    action: 'Insert cursor above/below',
  },
  {
    keys: ['Ctrl', 'L'],
    action: 'Select current line',
  },
  {
    keys: ['Ctrl', 'Shift', 'L'],
    action: 'Select all occurrences of current selection',
  },
  {
    keys: ['Ctrl', 'F2'],
    action: 'Select all occurrences of current word',
  },
];

export const linuxRichLanguageEditing = [
  {
    keys: ['Ctrl', 'Space'],
    action: 'Trigger suggestion',
  },
  {
    keys: ['Ctrl', 'Shift', 'Space'],
    action: 'Trigger parameter hints',
  },
  {
    keys: ['Ctrl', 'Shift', 'I'],
    action: 'Format document',
  },
  {
    keys: ['F12'],
    action: 'Go to definition',
  },
  {
    keys: ['Ctrl', '.'],
    action: 'Quick fix',
  },
  {
    keys: ['Shift', 'F12'],
    action: 'Show references',
  },
  {
    keys: ['F2'],
    action: 'Rename symbol',
  },
];

export const linuxEditorManagement = [
  {
    keys: ['Ctrl', 'K F'],
    action: 'Close folder',
  },
  {
    keys: ['Ctrl', '\\'],
    action: 'Split editor',
  },
  {
    keys: ['Ctrl', 'Shift', 'PgUp'],
    action: 'Move editor left',
  },
  {
    keys: ['Ctrl', 'Shift', 'PgDown'],
    action: 'Move editor right',
  },
];

export const linuxFileManagement = [
  {
    keys: ['Ctrl', 'N'],
    action: 'New file',
  },
  {
    keys: ['Ctrl', 'O'],
    action: 'Open file...',
  },
  {
    keys: ['Ctrl', 'S'],
    action: 'Save',
  },
  {
    keys: ['Ctrl', 'Shift', 'S'],
    action: 'Save as...',
  },
  {
    keys: ['Ctrl', 'K', 'Ctrl', 'W'],
    action: 'Close all',
  },
  {
    keys: ['Ctrl', 'Shift', 'T'],
    action: 'Reopen closed editor',
  },
  {
    keys: ['Ctrl', 'Tab'],
    action: 'Open next',
  },
  {
    keys: ['Ctrl', 'Shift', 'Tab'],
    action: 'Open previous',
  },
  {
    keys: ['Ctrl', 'K P'],
    action: 'Copy path of active file',
  },
  {
    keys: ['Ctrl', 'K R'],
    action: 'Reveal active file in Explorer',
  },
  {
    keys: ['Ctrl', 'K O'],
    action: 'Show active file in new window/instance',
  },
];

export const linuxDisplay = [
  {
    keys: ['F11'],
    action: 'Toggle full screen',
  },
  {
    keys: ['Shift', 'Alt', '0'],
    action: 'Toggle editor layout (horizontal/vertical)',
  },
  {
    keys: ['Ctrl', 'B'],
    action: 'Toggle sidebar visibility',
  },
  {
    keys: ['Ctrl', 'Shift', 'E'],
    action: 'Show explorer / Toggle focus',
  },
  {
    keys: ['Ctrl', 'Shift', 'F'],
    action: 'Show search',
  },
  {
    keys: ['Ctrl', 'Shift', 'G G'],
    action: 'Show source control',
  },
  {
    keys: ['Ctrl', 'Shift', 'D'],
    action: 'Show debug',
  },
  {
    keys: ['Ctrl', 'Shift', 'X'],
    action: 'Show extensions',
  },
  {
    keys: ['Ctrl', 'Shift', 'V'],
    action: 'Open markdown preview',
  },
];

export const linuxDebug = [
  {
    keys: ['F9'],
    action: 'Toggle breakpoint',
  },
  {
    keys: ['F5'],
    action: 'Start / Continue',
  },
  {
    keys: ['F11'],
    action: 'Step into',
  },
  {
    keys: ['Shift', 'F11'],
    action: 'Step into/out',
  },
  {
    keys: ['F10'],
    action: 'Step over',
  },
  {
    keys: ['Shift', 'F5'],
    action: 'Stop',
  },
];

export const linuxIntegratedTerminal = [
  {
    keys: ['Ctrl', '`'],
    action: 'Show integrated terminal',
  },
  {
    keys: ['Ctrl', 'Shift', '`'],
    action: 'Create new terminal',
  },
  {
    keys: ['Ctrl', 'Shift', 'C'],
    action: 'Copy selection',
  },
  {
    keys: ['Ctrl', 'Shift', 'V'],
    action: 'Paste into active terminal',
  },
  {
    keys: ['Ctrl', 'Shift', '↑ / ↓'],
    action: 'Scroll up/down',
  },
  {
    keys: ['Shift', 'PgUp / PgDn'],
    action: 'Scroll page up/down',
  },
  {
    keys: ['Shift', 'Home / End'],
    action: 'Scroll to top/bottom',
  },
];
