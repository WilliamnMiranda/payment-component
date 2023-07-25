import styled from "styled-components";

export const ContainerItem = styled.article`
  border: 1px solid #e3e8ef;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerImage = styled.article`
  height: 72px;
  width: 72px;
  background-color: white;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ContainerData = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContainerPriceAndName = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Name = styled.article`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #111729;
  font-size: 0.9em;
`;
export const Price = styled.article`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #111729;
  font-size: 0.9em;
`;
export const ContanerSizeAndColor = styled.article`
  display: flex;
  gap: 15px;
`;
export const ContainerLabel = styled.article``;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const Label = styled.article`
  color: #677489;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;
export const ValueLabel = styled.article`
  color: #111729;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.9em;
  position: relative;
  top: 5%;
`;
