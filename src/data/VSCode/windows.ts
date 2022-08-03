export const general = [
  {
    keys: ['F1'],
    action: 'Show Command Palette',
  },
  {
    keys: ['Ctrl', 'P'],
    action: 'Quick Open, Go to File...',
  },
  {
    keys: ['Ctrl', 'Shift', 'N'],
    action: 'New window/instance',
  },
  {
    keys: ['Ctrl', 'Shift', 'W'],
    action: 'Close window/instance',
  },
  {
    keys: ['Ctrl', ','],
    action: 'User Settings',
  },
];

export const basicEditing = [
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
    keys: ['Shift', 'Alt', '↑ / ↓'],
    action: 'Copy line up/down',
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
    action: 'Indent/outdent line',
  },
  {
    keys: ['Home / End'],
    action: 'Go to begginning/end of line',
  },
  {
    keys: ['Ctrl', 'Home'],
    action: 'Go to the beginning of file',
  },
  {
    keys: ['Ctrl', 'End'],
    action: 'Go to end of file',
  },
  {
    keys: ['Ctrl', '↑ / ↓'],
    action: 'Scroll line up/down',
  },
  {
    keys: ['Alt', 'PgUp / PgDn'],
    action: 'Scroll page up/down',
  },
  {
    keys: ['Ctrl', 'KC'],
    action: 'Add line comment',
  },
  {
    keys: ['Ctrl', 'KU'],
    action: 'Remove line comment',
  },
  {
    keys: ['Ctrl', '/'],
    action: 'Toggle line comment',
  },
  {
    keys: ['Shift', 'Alt', 'A'],
    action: 'Toggle block comment',
  },
];

export const navigation = [
  {
    keys: ['Ctrl', 'G'],
    action: 'Go to Line...',
  },
  {
    keys: ['Ctrl', 'Shift', 'M'],
    action: 'Show Problems panel',
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
    keys: ['Ctrl', 'Shift', 'Tab'],
    action: 'Navigate editor group history',
  },
  {
    keys: ['Alt', '← / →'],
    action: 'Go back / forward',
  },
];

export const searchAndReplace = [
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
  {
    keys: ['Alt', 'C / R / W'],
    action: 'Toggle case-sensitive / regex / whole word',
  },
];
