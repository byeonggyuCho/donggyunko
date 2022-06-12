import React from "react";
import styled from "styled-components";

const StyleBanner2 = styled.div`
  /* border: 1px solid blue; */
  height: 346px;
  display: flex;
  justify-content: space-around;

  .Btn {
    width: 330px;
    height: 183px;
    background: #0083cd;
    border-radius: 30px;
    margin-top: 70px;
    p {
      padding: 28px 0 74px 32px;
      color: #fff;
      font-size: 32px;
    }
  }
`;

function Banner2() {
  return (
    <StyleBanner2>
      <div className="Btn">
        <p>
          비대면
          <br />
          계좌 개설
        </p>
      </div>
      <div className="Btn">
        <p>
          전계좌
          <br />
          조회
        </p>
      </div>
    </StyleBanner2>
  );
}

export default Banner2;
