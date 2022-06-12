import React from "react";
import styled from "styled-components";

const StyleContent = styled.div`
  /*공통 스타일*/
  padding: 0 32px;

  .nav {
    display: flex;
    justify-content: space-between;
    h3 {
      padding: 0;
      margin: 0;
      font-size: 48px;
    }
    a {
      display: block;
      height: 61px;
      color: #666;
      text-decoration: none;
      font-size: 28px;
      p {
        line-height: 8px;
      }
      &:active {
        color: #666;
      }
    }
  }
  ul {
    margin-top: 43px;
    margin-bottom: 33px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 36px;
      line-height: 56px;
      color: #505050;
      margin-right: 38px;

    
    }
    .On {
        color: #0083cd;
      }
  }
`;

function Content() {
  return (
    <StyleContent>
      <div className="nav">
        <h3>금융추천 상품</h3>
        <a href="https://app.zeplin.io/project/628c6ce61fb1d6be055ac792/screen/628d81934fe57dbbd2d25cfb">
          <p>상품 전체보기 &#62;</p>
        </a>
      </div>
      <div className="nav2">
        <ul>
          <li className="On">#예금</li>
          <li>#대출</li>
          <li>#기업</li>
          <li>#투자</li>
        </ul>
      </div>
    </StyleContent>
  );
}

export default Content;
