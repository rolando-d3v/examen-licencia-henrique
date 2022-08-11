import React from "react";
import Answer from "../answer/Answer";

export default function AnswerAll({ data, currentAnswer, handleClick }) {
  return (
    <div>
      <Answer
        letter="a"
        answer={data?.respuesta_a}
        answer_img={data?.img_a}
        handleClick={handleClick}
        selected={currentAnswer === "a"}
      />
      <Answer
        letter="b"
        answer={data?.respuesta_b}
        answer_img={data?.img_b}
        handleClick={handleClick}
        selected={currentAnswer === "b"}
      />
      <Answer
        letter="c"
        answer={data?.respuesta_c}
        answer_img={data?.img_c}
        handleClick={handleClick}
        selected={currentAnswer === "c"}
      />
      <Answer
        letter="d"
        answer={data?.respuesta_d}
        answer_img={data?.img_d}
        handleClick={handleClick}
        selected={currentAnswer === "d"}
      />
      {/* <Answer
        letter="e"
        answer={data?.respuesta_e}
        handleClick={handleClick}
        selected={currentAnswer === "e"}
      /> */}
    </div>
  );
}
