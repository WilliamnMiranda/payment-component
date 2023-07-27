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
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ContainerCart = styled(ModelContainerCard)`
  background-color: #f8fafc;
  padding: 60px 80px;
  @media (max-width: 1500px) {
    background-color: transparent;
    padding: 0px;
  }
  @media (max-width: 800px) {
    padding: 10px 10px;
  }
`;

export const ContainerPayment = styled(ModelContainerCard)`
  @media (max-width: 800px) {
    padding: 10px 10px;
  }
`;
