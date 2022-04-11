import { Provider } from 'react-redux';
import { Index } from './routes/Index';
import store from './redux/store';

function App() {
  return (
    <div className='container-fluid'>
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
