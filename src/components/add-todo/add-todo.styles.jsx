import styled, { css } from "styled-components";

const openModal = css`
  display: block;
`;

const closeModal = css`
  display: none;
`;

const getButtonStyles = ({ addModal }) => {
  return addModal ? openModal : closeModal;
};

export const ModalStyle = styled.div`
  .modal {
    ${getButtonStyles}
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border-radius: 15px;
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  .close {
    color: white;
    float: right;
    font-size: 48px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .header {
    padding: 30px 40px 35px 40px;
    height: 70px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: #3d518c;
    color: white;
    border-radius: 15px 15px 0 0;
    font-size: 1.7rem;
    font-weight: 100;
  }

  .body {
    padding: 2px 16px;
  }
`;

export const FormStyles = styled.form`
  width: 80%;
  height: 80%;
  margin: auto;
  margin-bottom: 60px;
`;
