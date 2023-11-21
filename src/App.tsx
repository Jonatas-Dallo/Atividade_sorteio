import './App.css';
import { Provider } from './contexts/Contexto';
import Rotas from './routes/Route';

function App() {
  return (
    <Provider>
      <Rotas/>
    </Provider>
  );
}

export default App;
