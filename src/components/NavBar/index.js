import React from 'react';
import "./style.css";


function NavBar(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary layout">
            <h1>Memory Game!</h1>
            <h3>Click an image to begin!</h3>
        <div class="collapse navbar-collapse" id="navbarText">
          <span>
            <h4>
                Score: {props.score} | Top Score: {props.topscore}
            </h4>
          </span>
        </div>
        </nav>
    );
};




export default NavBar;