/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';
import { PageContainer } from './PageContainer';

export interface Props {}
export const Page: React.FunctionComponent<Props> = (props) => {
  return (
    <PageContainer>
      <div css={style}>Bulls & Bears</div>
    </PageContainer>
  );
};

const style = {
  color: '#5d3636',
  fontSize: 30,
};
