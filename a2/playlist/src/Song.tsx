import React from "react";

type Props = {
  readonly info: {
    readonly key: number;
    readonly title: string;
    readonly artist: string;
  };
};

const Song = ({ info }: Props) => {
  return (
    <li key={info.key}>
      {info.title} by <b>{info.artist}</b>
    </li>
  );
};

export default Song;
