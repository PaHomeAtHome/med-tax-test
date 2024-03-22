import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetToken } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data } = useGetToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/login', { replace: true });
    }
  }, [navigate, data]);

  return children;
}
