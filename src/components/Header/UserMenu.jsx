import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/operations';
import { selectUser } from 'redux/authorization/slice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        marginLeft: 'auto',
        // outline: '2px solid blue',
      }}
    >
      <p>{user.name}</p>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
