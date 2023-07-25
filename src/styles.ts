import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  gap: 20px;
  padding: 10px;
  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ModelContainerCard = styled.section`
  width: 50%;
  padding: 10px;
  @media (max-width: 1500px) {
    width: 75%;
  }
`;
export const ContainerCart = styled(ModelContainerCard)`
  background-color: #f8fafc;
  @media (max-width: 1500px) {
    background-color: transparent;
  }
`;

export const ContainerPayment = styled(ModelContainerCard)`
  background-color: blue;
`;
