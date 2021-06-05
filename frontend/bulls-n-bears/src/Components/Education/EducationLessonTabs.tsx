import React from 'react';
import { makeStyles, Tab, Tabs } from '@material-ui/core';

export interface EducationLessonTabsProps {
  handleChange(event: React.ChangeEvent<{}>, newValue: number): void;
  tabsLabels: string[];
  value: number;
}
export const EducationLessonTabs: React.FunctionComponent<EducationLessonTabsProps> = ({
  handleChange,
  tabsLabels,
  value,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        {tabsLabels.map((label) => (
          <Tab label={label} />
        ))}
      </Tabs>
    </div>
  );
};

const useStyles = makeStyles({});
