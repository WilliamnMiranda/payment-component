import styled from "styled-components";

export const ContainerItems = styled.div`
  background-color: #f8fafc;
  padding: 0px 20px 10px 20px;
  border-radius: 0px 0px 10px 10px;
`;
export const ListProducts = styled.div`
  padding-bottom: 20px;
`;
export const InfosCart = styled.div``;
export const ContainerDiscount = styled.div``;

export const DiscountTittle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #111729;
  font-size: 1em;
  margin-bottom: 5px;
`;
export const ContainerInputDiscountCode = styled.div`
  width: 100%;
  height: 48px;
  border: 2px solid #4b7df3;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  gap: 5px;
  border-radius: 12px;
`;
export const IconDiscountCode = styled.img`
  width: 24px;
  height: 24px;
`;
export const InputDiscountCode = styled.input`
  flex-grow: 1;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  color: #111729;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
export const ButtonApply = styled.button`
  background-color: transparent;
  border: none;
  color: #4b7df3;
  outline: none;
  height: 100%;
`;
export const ContainerInfosTotal = styled.div`
  border: 1px solid #e3e8ef;
  border-left: none;
  border-right: none;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
  margin-bottom: 15px;
`;
export const ContainerInfoTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.div`
  color: #677489;
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  font-weight: 300;
`;

export const Value = styled.div`
  color: #111729;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.9em;
  position: relative;
  top: 5%;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
