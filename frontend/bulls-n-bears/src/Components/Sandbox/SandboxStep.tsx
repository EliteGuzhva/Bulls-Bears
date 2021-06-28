import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import useAuth from '../../context/useAuth';

export interface SandboxStepProps {}
export const SandboxStep: React.FunctionComponent<SandboxStepProps> = (
  props
) => {
  const classes = useStyles();
  const { sandboxStep, loading } = useAuth();
  const handleStep = async () => {
    if (sandboxStep && !loading) {
      await sandboxStep();
    }
  };
  return (
    <Button
      variant="outlined"
      size="large"
      color="secondary"
      onClick={handleStep}
      disabled={loading}
    >
      Step
    </Button>
  );
};

const useStyles = makeStyles({});
