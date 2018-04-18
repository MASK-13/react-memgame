import React from "react";
import  "./Jumbotron.css";
class Jumbotron extends React.Component {
  
  render() {
    return (
   
      <div className="jumbotron">
        <h1 className="display-4">WHITE CARS</h1>
        <p className="lead">This is a simple memory game. Click on an image to start. Then be sure you only click on each image only once.</p>
        <hr className="my-4"/>
       </div>
   

      
    )
  }
}



export default Jumbotron;