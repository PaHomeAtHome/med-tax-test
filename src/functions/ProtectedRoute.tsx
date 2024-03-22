import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetToken } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data } = useGetToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/med-tax-test/login', { replace: true });
    }
  }, [navigate, data]);

  return children;
}
