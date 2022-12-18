import React, { Suspense, lazy } from 'react';
import AuthProvider from '@/global';
import Routes from '@/routes';
const Styling = lazy(() => import('@/utils/styling'));

function App() {
  return (
    <Suspense>
      <Styling>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Styling>
    </Suspense>
  );
}

export default App;
