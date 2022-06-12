import React from "react";
import styled from "styled-components";

const StyleBanner = styled.div`
  /*공통 스타일*/
  width: 100%;
  height: 460px;
  background: #edf3fd;
  /* border: 1px solid blue; */
  display: flex;
  position: relative;
  .TestRight {
    /* border: 1px solid black; */
    width: 40%;
    height: 460px;

    .BackImg {
      height: 460px;
      text-align: center;
      /* background-color: #0083cb; */
    }
    .PoBt {
      background: rgba(0, 0, 0, 0.7);
      width: 140px;
      height: 56px;
      border-radius: 28px;
      color: #fff;
      font-size: 24px;
      outline: none;
      border: none;
      position: absolute;
      right: 61px;
      bottom: 40px;
    }
  }
  .TestLeft {
    /* border: 1px solid red; */
    width: 60%;

    h1 {
      margin: 96px 63px 0 63px;
      height: 109px;
      font-size: 32px;
      color: #0083cd;
    }
    h2 {
      margin: 0 0 50px 64px;

      font-size: 60px;
    }
    a {
      display: block;
      font-size: 28px;
      color: #0083cb;
      margin-left: 64px;
    }
  }
`;

function Banner() {
  return (
    <StyleBanner>
      <div className="TestLeft">
        {/* 클래스 네임은 언제 쓰는가? */}
        <h1>
          든든하고 행복한
          <br />
          자산관리!
        </h1>
        <h2>스마트 뱅킹</h2>
        <a href="https://www.youtube.com/">APP 다운로드</a>
      </div>
      <div className="TestRight">
        {/* <img alt={"../images/1.png"} /> 이미지 태그하는방법 찾아봐도 모르겠음 */}
        <div className="BackImg">이미지 위치 이미지 태그 방법 숙달</div>
        <button className="PoBt">1/3</button>
      </div>
    </StyleBanner>
  );
}

export default Banner;
