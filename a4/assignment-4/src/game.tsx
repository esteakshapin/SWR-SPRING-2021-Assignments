import React, { useCallback, useState } from "react";

type Turns = {
  question: string;
  answer: string;
};

export default function Game() {
  const [questionInput, setQuestionInput] = useState<string>("");
  const [turns, setTurns] = useState<Turns[]>([]);
  const [answers] = useState<string[]>(["Yes", "no", "maybe so"]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFontElement>) => {
      if (questionInput.length > 2 && questionInput.includes("?")) {
        setTurns([
          {
            question: questionInput,
            answer: answers[Math.floor(Math.random() * 3)]
          },
          ...turns
        ]);
        setQuestionInput("");
        console.log(turns);
      } else {
        alert(
          "Please ask a question with at least one character and a (?) question"
        );
      }
    },
    [questionInput, turns, answers]
  );

  return (
    <div className="App">
      <h1>Number of questions asked: {turns.length}</h1>
      <input
        name="questions"
        placeholder="enter your questions with a question mark"
        value={questionInput}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setQuestionInput(e.currentTarget.value);
        }}
      />
      <input type="button" value="Ask!" onClick={handleSubmit} />
      <img src="https://banner2.cleanpng.com/20180712/jpy/kisspng-magic-8-ball-eight-ball-billiards-billiard-balls-billiards-balls-5b4720a429a5a5.4013654815313880681706.jpg" />
      <h2> 8 Ball response </h2>
      <p>{turns.length > 0 && turns[0].answer}</p>

      <h2> Q/A history </h2>
      <ul>
        {turns.map((item: Turns, index: number) => (
          <li key={index + item.question}>
            {" "}
            Q: {item.question} <br /> <p> A: {item.answer} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
