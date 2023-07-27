import styled from "styled-components";
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContainerDualInput = styled.div`
  display: flex;
  gap: 10px;
`;

export const DualInputs = styled.div`
  width: 50%;
`;
export const ButtonSubmit = styled.button`
  background-color: #4b7df3;
  height: 40px;
  outline: none;
  border: none;
  width: 100%;
  color: white;
  border-radius: 8px;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  && label {
    position: relative;
    top: 1px;
    color: #677489;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 0.9em;
  }
`;
export const ContainerSubmitAndCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  /* Estilos para o estado padrão do input */
  background-color: white; /* Cor de fundo padrão */
  border: 2px solid #4b7df3;
  border-radius: 10px;
  /* Estilos para o input quando estiver checado */
  &:checked {
    background-color: #4b7df3; /* Cor de fundo quando estiver checado */
  }
  width: 15px;
  height: 15px;
`;
export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #111729;
  font-size: 0.8em;
  position: relative;
  left: 0.2%;
`;
export const ContainerSelectedCard = styled.div`
  width: 100%;
`;

export const ContainerInputCard = styled.div`
  padding: 15px;
  border: 1px solid #e3e8ef;
  border-radius: 15px;
  margin: 10px 0px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  display: flex;
`;
export const ContainerRadioInputCard = styled.div``;
export const ContainerInfoCard = styled.div`
  flex: 1;
`;
export const NumberCard = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #111729;
`;
export const ImageSvgCard = styled.div``;
export const NameTypeCard = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #677489;
  font-size: 0.9em;
`;
export const ContainerCheckBoxInputCard = styled.div``;
