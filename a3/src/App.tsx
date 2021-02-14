import "./styles.css";
import React, { useState } from "react";
import Filtered from "./filtered";
import Other from "./other";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [query, setQuery] = useState("");
  const [addFriend, setAddFriend] = useState("");

  return (
    <div className="App">
      <label>
        {" "}
        Search:
        <input
          id="query"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </label>
      <input
        type="button"
        value="Submit"
        onClick={(e) => {
          setQuery("");
          e.preventDefault();
        }}
      />
      <br />
      <br />
      <label>
        {" "}
        Add Friends:
        <input
          id="addFriend"
          value={addFriend}
          onChange={(e) => {
            setAddFriend(e.target.value);
          }}
        />
      </label>
      <input
        type="button"
        value="Submit"
        onClick={(e) => {
          setFriends([...friends, addFriend]);
          setAddFriend("");
          e.preventDefault();
        }}
      />

      <h1> Friends List </h1>
      <ul>
        {friends.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>

      <h2> Filtered List </h2>
      <Filtered list={friends} query={query} />
      <h2> Other List </h2>
      <Other list={friends} query={query} />
    </div>
  );
}
