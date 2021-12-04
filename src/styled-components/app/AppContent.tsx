import React, {FC} from 'react';
import styled from "styled-components";

const StyledContent = styled.div`
  width: 90%;
  padding: 1rem;
  background: #155e54;
  margin: 0 auto;
`;

const AppContent: FC = props => {
    return <StyledContent {...props}/>
}

export default AppContent;