import React from "react";

type MyProp = {
  list: string[];
  query: string;
};

export default function Other(props: MyProp) {
  return (
    <ul>
      {props.list
        .filter((item: string) => !item.toLowerCase().includes(props.query))
        .map((item: string, index: number) => (
          <li key={index + item}> {item} </li>
        ))}
    </ul>
  );
}
