import React from 'react';
import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  Box,
} from '@material-ui/core';
import { Transactions } from './Transactions';
import { AvailableTickers } from './RightsideBar/AvailableTickers';
import { TransactionsHistory } from './RightsideBar/TransactionsHistory';
import { Assets } from './RightsideBar/Assets';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export interface SandboxContentProps {}
export const SandboxContent: React.FunctionComponent<SandboxContentProps> = (
  props
) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Transaction" />
        <Tab label="Tickers" />
        <Tab label="History" />
        <Tab label="Your Assets" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Transactions />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AvailableTickers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TransactionsHistory />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Assets />
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3f51b5',
    flexGrow: 1,
  },
});
