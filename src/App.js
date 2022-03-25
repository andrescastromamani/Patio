import { Index } from './routes/Index';
import { Sidebar } from './components/Sidebar';
import { MerchantContextProvider } from './contexts/MerchantContext';
import { AuthProvider } from './contexts/AuthContext';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className='container mt-3'>
      <AuthProvider>
        <MerchantContextProvider>
          <Sidebar id="sidebar" />
          <Index />
        </MerchantContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
