import styled from 'styled-components';

const appWrapper = styled.div`
  width           : 60%;
  height: 100%;
  padding         : 4rem;
  padding-top     : 0;
  margin: auto;
  @media (max-width: 500px) {
      width: 100%;
      padding: 2rem;
  }
`
export default appWrapper;