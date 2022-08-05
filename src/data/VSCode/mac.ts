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

export const navigation = [];

export const editorManagement = [];

export const fileManagement = [];

export const display = [];

export const debug = [];

export const integratedTerminal = [];
