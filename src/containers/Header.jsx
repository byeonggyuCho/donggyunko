import React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
  /*공통 스타일*/
  width: 100%;
  height: 96px;
  /* border: 1px solid red; */
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

function Header() {
  return (
    <StyleHeader>
      <h1>우리종합금융</h1>
      <button>메뉴</button>
    </StyleHeader>
  );
}

export default Header;
