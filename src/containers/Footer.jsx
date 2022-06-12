import React from "react";
import styled from "styled-components";

const StyleFooter = styled.header`
  /*공통 스타일*/
  width: 100%;
  height: 96px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;

  h1 {
    margin-left: 31px;
  }
  button {
    margin: 27px 32px 29px;
    height: 40px;
    width: 40px;
  }
`;

function Footer() {
  return (
    <StyleFooter>
      <p>개인정보처리방식 | 개인신용정보호관리보호</p>
    </StyleFooter>
  );
}

export default Footer;
