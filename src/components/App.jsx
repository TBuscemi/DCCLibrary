import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar.css/TitleBar'
class App extends Component{
    constructor(props){
        super(props);
        this.books =[
             {title: "Alien: Into Charybdis", author: "Alex White"},
             {title:"Star Wars: Death Troopers",author:" Joe Schreiber"},
             {title:"Dune",author:"Frank Herbert"}   
        ];
        this.state = {
            bookNumber : 0
        }
    }
    render(){
        return(
            <div className = "container-fluid">
                <TitleBar />
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h1>{this.books[this.state.bookNumber].title} </h1>
                    <h4>{this.books[this.state.bookNumber].author} </h4>
                </div>
                <div className="col-md-4"></div>
                </div>
            </div>
                
        )   
    }
}

export default App;