import React from "react";
import * as B from "../styles/BirthStyle";
import Picture from "../components/Picture";
import Content from "../components/Content";
import Send from "../components/Send";

function Birth() {
  return (
    <>
      <B.Birth>
        <B.BirthItem>
          <B.BirthTitle><span>서진영</span>님의<br></br>🎂생일을 축하드립니다🎂</B.BirthTitle>
        <Picture />
        </B.BirthItem>
        <B.BirthItem>
        <Send />
        <Content />
        </B.BirthItem>

      </B.Birth>
    </>
  );
}

export default Birth;
