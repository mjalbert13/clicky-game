import React, {Component}  from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ImageCard from "./components/ImageCard"
import Container from './components/Container'
import cards from './images.json'

import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0
  }

  gameOver = () => {
    if(this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score}, function(){
        console.log(this.state.highScore);
      });
    }
    this.state.cards.forEach(cards => {
      cards.count =0;
    });
    alert('Game Over!  \nscore :'+ this.state.score);
    this.setState({score: 0});
    return true
  }

  handleClickCount = id => {
    this.state.cards.find((data,i) => {
      if(data.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count +1;
          this.setState({score: this.state.score +1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true
        }else{
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Container>
        <Header score={this.state.score} highScore={this.state.highScore}></Header> 
        {this.state.cards.map(card => (
          <ImageCard
            handleClickCount = {this.handleClickCount}
            id ={ card.id}
            key = {card.id}
            image = {card.image}
          />
        ))}
        <Footer/>
      </Container>
    )
  }

}

export default App;
