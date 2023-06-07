import React, { Component } from 'react'
import './styles/Main.css'
import { Players } from '../Share/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: Players
        };
    }
    render() {
      return <PlayersPresentation players={this.state.players}/>
    }
  }
export default Main  