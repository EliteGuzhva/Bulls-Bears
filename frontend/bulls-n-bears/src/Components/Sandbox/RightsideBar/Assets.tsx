import React from 'react';
import { List, makeStyles, ListItemText, ListItem } from '@material-ui/core';
import useAuth from '../../../context/useAuth';

export interface AssetsProps {}
export const Assets: React.FunctionComponent<AssetsProps> = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const assets = user?.sandboxData.assets;
  return (
    <div>
      {assets !== undefined && (
        <List>
          {assets.map(({ ticker, amount }) => (
            <ListItem>
              <ListItemText primary={ticker} secondary={amount} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

const useStyles = makeStyles({});
