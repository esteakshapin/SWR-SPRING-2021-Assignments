import React from "react";
import Song from "./Song";

type info = {
  key: number;
  title: string;
  artist: string;
};

type MyState = {
  songs: info[];
  title: string;
  artist: string;
};

class Playlist extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      songs: [
        { key: 0, title: "Never Gonna Give You Up", artist: "Rick Astley" }
      ],
      title: "",
      artist: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
  }

  handleTitleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ title: event.currentTarget.value });
  }

  handleArtistChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ artist: event.currentTarget.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (this.state.title !== "" && this.state.artist !== "") {
      let newSong: info = {
        key: this.state.songs.length + 1,
        title: this.state.title,
        artist: this.state.artist
      };

      this.setState({
        songs: [...this.state.songs, newSong],
        title: "",
        artist: ""
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1> Playlist </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label>
            Artist:
            <input
              type="text"
              name="artist"
              value={this.state.artist}
              onChange={this.handleArtistChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h4> Songs </h4>
        <ul>
          {this.state.songs.map((n: info) => (
            <Song key={n.key} info={n} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Playlist;
