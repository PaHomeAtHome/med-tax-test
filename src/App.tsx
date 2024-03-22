import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createHashRouter, HashRouter, RouterProvider } from 'react-router-dom';
import { CircularProgress, ThemeProvider } from '@mui/material';

import ProtectedRoute from './functions/ProtectedRoute';
import ClientsPage from './pages/ClientsPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import theme from './themes/theme';

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ClientsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <RouterProvider
            router={router}
            fallbackElement={<CircularProgress />}
          />
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
