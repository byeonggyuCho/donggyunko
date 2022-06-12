import React from "react";
import styled from "styled-components";

const StyleContent = styled.div`
  /*공통 스타일*/
  padding: 0 32px; 
  div{
    padding: 0;
    margin: 0;
    height: 640px;
    border-radius: 60px;
    background: #f1f9fc;
    h2{
      padding: 0 408px 57px 55px;

      font-size: 80px;
      color: #0083cd;
      span{
        font-size: 28px;
        line-height: 56px;
      }
    }
    h3{
      padding: 70px 235px 26px 58px;
      font-size: 48px;
    }
    .FN{
      padding: 0 317px 0 60px;
      font-size: 32px;
      color: #6e6e6e;
    }
  }

 
`;

function Content2() {
  return (
    <StyleContent>
      <div>
        <h3>CMA Note</h3>
        <p className="FN">확정금리 자유입출금 <br />예금상품</p>
        <h2>
        <span>최대</span><br />
        1.95%
      </h2>
      </div>
      
    </StyleContent>
  );
}

export default Content2;
