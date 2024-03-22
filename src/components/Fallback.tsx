import Backdrop from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';

export const Fallback = () => {
  return (
    <Backdrop>
      <CircularProgress />
    </Backdrop>
  );
};
