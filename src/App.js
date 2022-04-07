import { Provider } from 'react-redux';
import { Index } from './routes/Index';
import { AuthProvider } from './contexts/AuthContext';
import store from './redux/store';

function App() {
  return (
    <div className='container-fluid'>
      <Provider store={store}>
        <AuthProvider>
          <Index />
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
