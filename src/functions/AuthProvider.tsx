import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useGetToken = () => {
  return useMutation({
    mutationFn: (data: object) =>
      axios.post(
        'https://api-dev.medtax.pp.ua/auth/login/admin-accountant',
        data,
      ),
  });
};
