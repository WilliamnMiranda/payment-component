import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #111729;
    font-size: 0.8em;
    position: relative;
    left: 0.2%;
  }
`;

export const InputText = styled.input`
  background-color: #ffffff;
  border: 1px solid #e3e8ef;
  outline: none;
  border-radius: 8px;
  height: 40px;
  padding: 0px 10px;
`;
