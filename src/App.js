import React, {Component} from 'react';
import NavBar from './components/NavBar';
import FootBar from './components/FootBar';
import image from "./image.json";
import ClickPic from "./components/ClickPic";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topscore: 0
  };
    // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return(
    
    <div className="container">
      <NavBar 
        score={this.state.score}
        topscore={this.state.topscore}
      />
      <div className="jumbotron">
        <h1>Welcome to the Clicky Game!</h1>
        <h3>Click on an image to earn points!</h3>
      </div>

        <div className="container">
          <ClickPic 
            image={image[0].image}
            onClick={this.handleIncrement}
          />
          <ClickPic 
            image={image[1].image}
            onClick={this.handleIncrement}
          />
          <ClickPic 
            image={image[2].image}
            onClick={this.handleIncrement}
          />
          <ClickPic 
            image={image[3].image}
            onClick={this.handleIncrement}
          />
      </div>

      <FootBar />
    </div>
   )
  }
};

export default App;
