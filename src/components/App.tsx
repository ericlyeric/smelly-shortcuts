import Main from './common/Main';
import Sidebar from './common/Sidebar';
import { SystemProvider } from './context/SystemContext';
import { ShortcutsProvider } from './context/ShortcutsContext';

function App() {
  return (
    <div className="flex h-screen">
      <SystemProvider>
        <ShortcutsProvider>
          <Sidebar />
          <Main />
        </ShortcutsProvider>
      </SystemProvider>
    </div>
  );
}

export default App;
