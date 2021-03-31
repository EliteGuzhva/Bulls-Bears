// /** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ContainerProps {
  weight?: number;
  backgroundColor?: string;
}

const Container = styled('div')<ContainerProps>(
  {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  (props) => ({
    fontWeight: props.weight,
    backgroundColor: props.backgroundColor,
  })
);

export const PageContainer: React.FunctionComponent = ({ children }) => (
  <Container backgroundColor="#dbe2d2">{children}</Container>
);
