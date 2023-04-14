import styled from "styled-components";

export const NavMain = styled.nav`
  height: 80px;
  background: #2b3743;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  gap: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.div`
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
`;

export const DarkLight = styled.div`
  width: 107px;
  height: 19px;

  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  & span {
    color: #fff;
  }
`;
