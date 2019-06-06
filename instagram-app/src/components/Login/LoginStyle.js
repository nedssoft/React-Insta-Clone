import styled from 'styled-components';

const loginWrapper = styled.div`
  margin: auto;
  margin-top: 10rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2.5rem 2rem 2.5rem;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  box-shadow: 0px 0px 5px 0px rgba(204,204,204,1);
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    input,button {
      width: 100%;
      border-radius: 4px;
      outline: none;
      font-size: 1.4rem;
    }
    input {
      background: #fafafa;
      border: 1px solid #cccccc;
      padding: 0.8rem;
    }
    input:first-of-type {
      margin-bottom: 0.8rem;
    }
    button {
      margin: 1rem 0;
      padding: 0.6rem;
      background: #3897f0;
      color: #fff;
      border: none;
      opacity: 0.6;
      cursor: pointer;

    }
    button:hover {
      opacity: 1;
    }
  }
  .separator {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 1rem auto;
  .line {
      width: 40%;
      background: #cccccc;
      height: 1px;
    }
  .or {
      font-size: 1.6rem;
      text-transform: uppercase;
      color: #cccccc;
      font-weight: 100;
    }
  }
  .fb {
    color: #3897f0;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
  }
  .forgot-password {
    color: #003569;
    font-size: 1.6rem;
    cursor: pointer;
  }
  h2 {
    font-size  : 3rem;
    font-family: 'Satisfy', cursive;
    margin-bottom: 2rem;
  }
`
export default loginWrapper;
