import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Loading = ({ active, children }) => (
  <LoadingContainer>
    <LoadingOverlay
      active={active}
      styles={{
        wrapper: {
          width: '100%',
          height: '100%',
          overflow: 'initial',
          display: 'inherit',
          justifyContent: 'inherit'
        }
      }}
      spinner
    >
      {children}
    </LoadingOverlay>
  </LoadingContainer>
);
// {
//   /* </div> */
// }
// {
//   /* <ReactLoading type="spin" color="#ccc" height={50} width={50} /> */
// }
export default Loading;