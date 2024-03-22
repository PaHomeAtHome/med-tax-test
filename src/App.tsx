import './App.css';
import { Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CircularProgress, ThemeProvider } from '@mui/material';

import ProtectedRoute from './functions/ProtectedRoute';
import ClientsPage from './pages/ClientsPage';
import LoginPage from './pages/LoginPage';
// import NotFoundPage from './pages/NotFoundPage';
import theme from './themes/theme';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
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
      path: '/*',
      element: <Navigate to="/login" replace={true} />,
    },
  ],
  { basename: '/med-tax-test' },
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          fallbackElement={<CircularProgress />}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
