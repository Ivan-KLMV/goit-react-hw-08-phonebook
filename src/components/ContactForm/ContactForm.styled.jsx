import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  padding: 5px;
  padding-bottom: 15px;

  border: 1px solid black;
  border-radius: 2px;

  & > label {
    display: flex;
    flex-direction: column;
    width: fit-content;

    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;

    & > input {
      padding: 4px;
      margin-top: 5px;
      border: 1px solid darkgray;
      border-radius: 2px;
    }
  }

  & > button {
    width: fit-content;
    margin-top: 20px;
    padding: 6px 12px;

    background-color: white;
    border: 1px solid darkgray;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1215686275),
      0px 1px 2px 0px rgba(0, 0, 0, 0.0784313725);
    text-transform: capitalize;
    font-family: inherit;
    font-weight: 500;

    &.addIsLoading {
      background-color: #e5e5f7;
      opacity: 0.7;
      background: repeating-linear-gradient(
        -45deg,
        #969696,
        #969696 20px,
        white 8px,
        white 40px
      );
      background-size: 400% 400%;
      animation: AnimationName 5s linear infinite;
      @keyframes AnimationName {
        0% {
          background-position: 100%;
        }
        50% {
          background-position: 50%;
        }
        100% {
          background-position: 0%;
        }
      }
    }

    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.0384313725);
      background-color: whitesmoke;
    }
    &:disabled {
      opacity: 0.5;
      background-color: white;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1215686275),
        0px 1px 2px 0px rgba(0, 0, 0, 0.0784313725);
    }
  }
`;
