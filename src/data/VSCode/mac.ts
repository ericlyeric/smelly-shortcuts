export const macGeneral = [
  {
    keys: ['F1'],
    action: 'Show command palette',
  },
  {
    keys: ['⌘', 'P'],
    action: 'Quick open, Go to file...',
  },
  {
    keys: ['⇧', '⌘', 'N'],
    action: 'New window/instance',
  },
  {
    keys: ['⌘', 'W'],
    action: 'Close window/instance',
  },
  {
    keys: ['⌘', ','],
    action: 'User settings',
  },
];

export const macBasicEditing = [
  {
    keys: ['⌘', 'X'],
    action: 'Cut line',
  },
  {
    keys: ['⌘', 'C'],
    action: 'Copy line',
  },
  {
    keys: ['⌥', '↑ / ↓ '],
    action: 'Move line up/down',
  },
  {
    keys: ['⇧', '⌥', '↑ / ↓'],
    action: 'Copy line up/down',
  },
  {
    keys: ['⇧', '⌘', 'K'],
    action: 'Delete line',
  },
  {
    keys: ['⌘', 'Enter'],
    action: 'Insert line below',
  },
  {
    keys: ['⇧', '⌘', 'Enter'],
    action: 'Insert line above',
  },
  {
    keys: ['⇧', '⌘', '\\'],
    action: 'Jump to matching bracket',
  },
  {
    keys: ['⌘', '] / ['],
    action: 'Indent/outdent line',
  },
  {
    keys: ['Home / End'],
    action: 'Go to beginning/end of line',
  },
  {
    keys: ['⌘', '↑ / ↓'],
    action: 'Go to beginning/end of file',
  },
  {
    keys: ['⌃', 'PgUp / PgDn'],
    action: 'Scroll line up/down',
  },
  {
    keys: ['⌘', 'PgUp / PgDn'],
    action: 'Scroll page up/down',
  },
  {
    keys: ['⌘', 'K', '⌘', 'C'],
    action: 'Add line comment',
  },
  {
    keys: ['⌘', 'K', '⌘', 'U'],
    action: 'Remove line comment',
  },
  {
    keys: ['⌘', '/'],
    action: 'Toggle line comment',
  },
  {
    keys: ['⇧', '⌥', 'A'],
    action: 'Toggle block comment',
  },
];

export const macMultiCursorAndSelection = [
  {
    keys: ['⌥', 'click'],
    action: 'Insert cursor',
  },
  {
    keys: ['⌥', '⌘', '↑'],
    action: 'Insert cursor above',
  },
  {
    keys: ['⌥', '⌘', '↓'],
    action: 'Insert cursor below',
  },
  {
    keys: ['⌘', 'L'],
    action: 'Select current line',
  },
  {
    keys: ['⇧', '⌘', 'L'],
    action: 'Select all occurrences of current selection',
  },
  {
    keys: ['⌘', 'F2'],
    action: 'Select all occurrences of current word',
  },
];

export const macSearchAndReplace = [
  {
    keys: ['⌘', 'F'],
    action: 'Find',
  },
  {
    keys: ['⌥', '⌘', 'F'],
    action: 'Replace',
  },
  {
    keys: ['⌘', 'G'],
    action: 'Find next',
  },
  {
    keys: ['⇧', '⌘', 'G'],
    action: 'Find previous',
  },
  {
    keys: ['⌥', 'Enter'],
    action: 'Select all occurrence of Find match',
  },
];

export const macRichLanguageEditing = [
  {
    keys: ['^', 'Space'],
    action: 'Trigger suggestion',
  },
  {
    keys: ['⇧', '⌘', 'Space'],
    action: 'Trigger parameter hints',
  },
  {
    keys: ['⇧', '⌥', 'F'],
    action: 'Format document',
  },
  {
    keys: ['⌘', 'K', '⌘', 'F'],
    action: 'Format selection',
  },
  {
    keys: ['F12'],
    action: 'Go to definition',
  },
  {
    keys: ['⌘', '.'],
    action: 'Quick fix',
  },
  {
    keys: ['⇧', 'F12'],
    action: 'Show references',
  },
  {
    keys: ['F2'],
    action: 'Rename symbol',
  },
];

export const macNavigation = [
  {
    keys: ['⌃', 'G'],
    action: 'Go to line...',
  },
  {
    keys: ['F8'],
    action: 'Go to next error or warning',
  },
  {
    keys: ['⇧', 'F8'],
    action: 'Go to previous error or warning',
  },
  {
    keys: ['⌃', '-/⇧-'],
    action: 'Go back/forward',
  },
];

export const macEditorManagement = [
  {
    keys: ['⌘', 'K F'],
    action: 'Close folder',
  },
  {
    keys: ['⌘', '\\'],
    action: 'Split editor',
  },
  {
    keys: ['⌘', 'K', '⇧', '⌘', '←/→'],
    action: 'Move editor left/right',
  },
];

export const macFileManagement = [
  {
    keys: ['⌘', 'N'],
    action: 'New file',
  },
  {
    keys: ['⌘', 'O'],
    action: 'Open file...',
  },
  {
    keys: ['⌘', 'S'],
    action: 'Save',
  },
  {
    keys: ['⇧', '⌘', 'S'],
    action: 'Save as...',
  },
  {
    keys: ['⌥', '⌘', 'S'],
    action: 'Save all',
  },
  {
    keys: ['⌘', 'K', '⌘', 'W'],
    action: 'Close all',
  },
  {
    keys: ['⇧', '⌘', 'T'],
    action: 'Reopen closed editor',
  },
  {
    keys: ['⌃', 'Tab'],
    action: 'Open next',
  },
  {
    keys: ['⌃', '⇧', 'Tab'],
    action: 'Open previous',
  },
  {
    keys: ['⌘', 'K P'],
    action: 'Copy path of active file',
  },
  {
    keys: ['⌘', 'K R'],
    action: 'Reveal active file in Finder',
  },
  {
    keys: ['⌘', 'K O'],
    action: 'Show active file in new window/instance',
  },
];

export const macDisplay = [
  {
    keys: ['⌃', '⌘', 'F'],
    action: 'Toggle full screen',
  },
  {
    keys: ['⌥', '⌘', '0'],
    action: 'Toggle editor layout (horizontal/vertical)',
  },
  {
    keys: ['⌘', 'B'],
    action: 'Toggle sidebar visibility',
  },
  {
    keys: ['⇧', '⌘', 'E'],
    action: 'Show explorer / Toggle focus',
  },
  {
    keys: ['⇧', '⌘', 'F'],
    action: 'Show search',
  },
  {
    keys: ['^', '⇧', 'G'],
    action: 'Show source control',
  },
  {
    keys: ['⇧', '⌘', 'D'],
    action: 'Show debug',
  },
  {
    keys: ['⇧', '⌘', 'X'],
    action: 'Show Extensions',
  },
  {
    keys: ['⇧', '⌘', 'V'],
    action: 'Open markdown preview',
  },
];

export const macDebug = [
  {
    keys: ['F9'],
    action: 'Toggle breakpoint',
  },
  {
    keys: ['F5'],
    action: 'Start/Continue',
  },
  {
    keys: ['⇧', 'F5'],
    action: 'Stop',
  },
  {
    keys: ['F11'],
    action: 'Step into',
  },
  {
    keys: ['⇧', 'F11'],
    action: 'Step out',
  },
  {
    keys: ['F10'],
    action: 'Step over',
  },
];

export const macIntegratedTerminal = [
  {
    keys: ['^', '`'],
    action: 'Show integrated terminal',
  },
  {
    keys: ['^', '⇧', '`'],
    action: 'Create new terminal',
  },
  {
    keys: ['⌘', 'C'],
    action: 'Copy selection',
  },
  {
    keys: ['⌘', '↑ / ↓'],
    action: 'Scroll up/down',
  },
  {
    keys: ['PgUp / PgDn'],
    action: 'Scroll page up/down',
  },
  {
    keys: ['⌘', 'Home / End'],
    action: 'Scroll to top/bottom',
  },
];
