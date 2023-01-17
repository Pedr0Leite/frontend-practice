import styled from "styled-components";

import SUCCESSICON from "../../../assets/check.svg";

interface FileCreatedImgDivProps {
  imgUrl: any;
}

export const FileCreatedSuccessDiv = styled.div`
  background: url("${SUCCESSICON}");
  height: 50px;
  width: 50px;
  background-color: green;
  align-self: center;
  border-radius: 100px;
`;

export const FileCreatedImgDiv = styled.div<FileCreatedImgDivProps>`
  width: 338px;
  height: 224.4px;
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: 150% 125%;
  background-repeat: no-repeat;
  background-position-y: -25px;
  background-position-x: -84px;

  display: flex;
  justify-content: center;
  align-content: center;
`;

export const FileCreatedInputButtonDiv = styled.div`
  width: 338px;
  height: 34px;
`;

export const FileCreatedInput = styled.input`
  width: 338px;
  height: 34px;
  padding-right: 80px;

  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
export const FileCreatedButton = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #ffffff;
  height: 30px;
  width: 74px;
  left: 130px;
  position: relative;
  bottom: 33px;
`;
