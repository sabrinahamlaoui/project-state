import React, { Component } from "react";
import Img from "./image.jpg";
import { Card } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jhon doe",
        bio: "financial engineering",
        imgSrc: { Img },
        profession: "Banker",
        show: false,
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState({
      count: 0,
      person: { ...this.state.person, show: !this.state.person.show },
    });
  };

  toggledButon = () => {
    const styleObject = {
      color: "blue",
      textAlign: "center",
      marginTop: "20px",
    };
    const styleObject2 = {
      width: "18rem",
      margin: "auto",
      color: "orange",
      marginTop: "50px",
    };

    return (
      <div className="btnToggled" style={styleObject}>
        {this.state.person.show ? (
          <div>
            <p>{this.state.count} secondes que vous avez visité le profil</p>
            <Card style={styleObject2}>
              <Card.Img
                variant="top"
                src={Img}
                style={{ width: "50%", margin: "30px auto 0px" }}
              />
              <Card.Body>
                <Card.Title>{this.state.person.fullName}</Card.Title>
                <Card.Text>{this.state.person.profession}</Card.Text>
                <Card.Title>{this.state.person.bio}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <button
          style={{ margin: "50px" ,color: "white"}}
          onClick={() => {
            this.handleClick();
          }}
          type="button"
          className="btn btn-primary"
        >
          cliquer ici{" "}
        </button>
        {this.toggledButon()}
      </div>
    );
  }
}

App.propTypes = {};

export default App;