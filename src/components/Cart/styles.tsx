import styled from "styled-components";

const HeaderMedias = styled.div`
  background-color: #f8fafc;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #111729;
  font-size: 1em;
`;

export const HeaderMobile = styled(HeaderMedias)`
  display: none;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 1500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderWeb = styled(HeaderMedias)`
  display: block;
  background-color: transparent;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const TextHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ValueTotalCart = styled.p`
  color: #111729;
`;
