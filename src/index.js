import React, { Component } from "react";
import ReactDOM from "react-dom";

const PhotoList = ({ photos }) => {
  return (
    <div>
      {photos.map((photo, i) => {
        return (
          <div>
            <p>key={i}</p>
            <p>id={photo.id}</p>
            <p>title={photo.title}</p>
            <p>url={photo.url}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        return response.json();
      })
      .then(photos => {
        this.setState({ photos: photos });
      });
  }
  render() {
    if (this.state.photos.length > 0) {
      return (
        <div className="container-fluid">
          <PhotoList photos={this.state.photos} />
        </div>
      );
    } else {
      return <span>Esperando photos</span>;
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
