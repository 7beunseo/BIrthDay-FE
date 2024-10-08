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
