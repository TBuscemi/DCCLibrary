import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar.css/TitleBar'
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import BookCreator from './BookCreator/BookCreator';
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

    goToNextBook = ()=>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0
        }
        this.setState({
            bookNumber:tempBookNumber
        });
    }
    goToPreviousBook = ()=>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
             bookNumber: tempBookNumber
        });
    }  
    
    render(){

        return(
            <div className = "container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} goToNextBook={this.goToNextBook}goToPreviousBook={this.goToPreviousBook} />
                <BookCreator createNewBook={this.createBook} />
                <Footer />
            </div>
                
        )   
    }
}

export default App;