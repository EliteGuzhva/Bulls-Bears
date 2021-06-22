import React from 'react';
import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  TypographyVariant,
} from '@material-ui/core';
import useAuth from '../context/useAuth';
import { User } from '../types/user';

export interface UserInfoProps {
  user: User;
  logout(): Promise<void>;
}
export const UserInfo: React.FunctionComponent<UserInfoProps> = ({
  user: {
    username,
    sandboxData: { balance },
  },
  logout,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout();
  };
  return (
    <div>
      <Button color="inherit" onClick={handleClick}>
        {username}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

const useStyles = makeStyles({});
