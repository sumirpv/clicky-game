import React, { Component } from "react";
import SpaceCard from "./components/SpaceCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import space from "./spaces.json";
import "./App.css";
var score=0;
var topScore =0;
var message ="";
class App extends Component {
  // Setting this.state.space to the space json array
  state = {
    score ,
    topScore ,
    message: "Click an image to begin!",
    space ,
    guessedSpace:[]
  };
  shuffleCard = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

clickHandler =(id)=>{
  const space = this.state.space;
  const clickedSpace =space.filter(item =>
  item.id === id
  );
  if(clickedSpace[0].click){
    console.log("score", score)
    console.log("tscore", topScore);
    score=0;
    message="You guessed incorrectly!";
    for (let i = 0 ; i < space.length ; i++){
      space[i].click = false;
      }
  this.setState({
          message,
          space ,
          score,
       })

  }else if( score <11){
    clickedSpace[0].click =true;
    score++;
    // topScore++;
    message="You guessed Correctly!";
    if( score >topScore){
      topScore = score;
      this.setState({
        score
      })
    }
    this.shuffleCard(space);
    this.setState({
      message,
      space ,
      score,
      topScore
   })
  }else{
    clickedSpace[0].click =true;
    score=0;
    message="You guessed Correctly!";
    topScore =12;
    this.setState({
      topScore
    })
    for (let i = 0 ; i < space.length ; i++){
      space[i].click = false;
      }
      this.shuffleCard(space);
      this.setState({
        message,
        space ,
        score,
     })
  }
}

// clickHandler = (id) => {
//   console.log("cliked");
//   console.log("the image click is ", this.state.click)
//   console.log("the image id is ", space.id)
// // var guessedSpace = this.state.guessedSpace;
// // var score = this.state.score;
// // var topScore =this.state.topScore;
// // if(guessedSpace[card.click]){
// //      this.setState({
// //       message: "You guessed incorrectly!",
// //       guessedSpace:[] ,
// //       score:0,
// //       topScore : this.state.topScore +1
// //    })
// // }else{
// //   guessedSpace[card.click]=true,
// //   this.setState({
// //     message: "You guessed Correctly!",
// //     guessedSpace:guessedSpace ,
// //     score: ++score
// //  })
// // }
// this.state.space.array.forEach(element => {
  
// });
//  if( this.state.click === true){
//    this.setState({
//       message: "You guessed incorrectly!",
//       click : false ,
//       score:0,
//       topScore : this.state.topScore +1
//    })
//  }else{
//    this.state.click =true;
//   this.setState({
//     message: "You guessed Correctly !!!",
//     score : this.state.score +1
   
//  })
//  }

//  this.shuffleCard(space);


// };



  // Map over this.state.space and render a SpaceCard component for each friend object
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand" ><h1 id="game">Clicky Game </h1></h1>

            <div className="collapse navbar-collapse" id="navbarText">

              <h1 id="message">{this.state.message}     </h1>
              <h1 className="navbar-text score">
               Score : { this.state.score} 
              </h1>
              <h1 className="navbar-text score1">
               Top Score :  { this.state.topScore} 
              </h1>
            </div>
          </nav>
          <Wrapper>
        <Title>Space and Beyond</Title>
        {this.state.space.map(item => (
          <SpaceCard className="spaces" clickHandler={this.clickHandler}
            id={item.id}
            key={item.id}
            image={item.image}
          />
        ))}
      </Wrapper>
      </div>

    );
  }
}

export default App;
