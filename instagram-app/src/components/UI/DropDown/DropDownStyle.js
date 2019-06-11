import styled from 'styled-components';

const dropdownWrapper = styled.ul`
  margin: 0;
  padding:0;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #ccc;
  z-index: 1000;
  position: absolute;
  top: 72px;
  @media (max-width: 500px) {
    right: 40px;
    top: 140px;
  }
  .dropDown-item {
    text-align: center;
    padding: 0.8rem 0;
    width: 100%;
    font-size: 1.6rem;
    cursor: pointer;
  }
`

export default dropdownWrapper