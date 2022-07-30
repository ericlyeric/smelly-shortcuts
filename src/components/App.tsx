import Main from './common/Main';
import Sidebar from './common/Sidebar';
import { ShortcutProvider } from './context/ShortcutContext';
import { KeyboardProvider } from './context/KeyboardContext';

function App() {
  return (
    <div className="flex h-screen">
      <ShortcutProvider>
        <KeyboardProvider>
          <Sidebar />
          <Main />
        </KeyboardProvider>
      </ShortcutProvider>
    </div>
  );
}

export default App;
