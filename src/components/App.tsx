import Main from './common/Main';
import Sidebar from './common/Sidebar';
import { SettingsProvider } from './context/SettingsContext';
import { ShortcutsProvider } from './context/ShortcutsContext';

function App() {
  return (
    <div className="flex h-screen">
      <SettingsProvider>
        <ShortcutsProvider>
          <Sidebar />
          <Main />
        </ShortcutsProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
