import React from 'react';
import './App.css';
import Navbar from './navbar';
import Onemoviebox from'./onemoviebox';
import Rating from './rating';
import Spiner from './Spiner';

const movies=[{
  image:"https://upload.wikimedia.org/wikipedia/en/f/f0/Lion_%282016_film%29.png",
  title:"LION",
  rating:3
},
{
  image:"http://fr.web.img6.acsta.net/c_215_290/pictures/19/09/03/12/02/4765874.jpg",
  title:"JOKER",
  rating:4
},
{
  image:"http://fr.web.img6.acsta.net/pictures/14/09/22/10/40/162066.jpg",
  title:"INTERSELLAR",
  rating:5
}]
class App extends React.Component {
  constructor(props){
    super (props)
    this.state={
      listofmovies : movies,
      newRating: 1,
      name:"",
      loading:true,
    }
    setTimeout(() => this.setState({loading: false}), 5000)
  }
  // ★  ✩
addmovie=()=> {
 let movieimage=prompt('please enter your movie image');
 let movietitle=prompt('please enter your movie title');
 let movierating=prompt('please enter your movie rating');
  let newmovie={image:movieimage,title:movietitle,rating:movierating}
  this.setState({listofmovies:this.state.listofmovies.concat(newmovie)})
  
 }
 
 setRating = x => {
   this.setState({newRating: x})
 }

 setInput=y=>{
   this.setState({name:y})
   console.log(y)
 }

render(){
  return (
    <div className="App">
      <div  style={{display:'flex', justifyContent: 'center',alignItems:'center'}}>
      <Navbar name={search=>this.setInput(search)}/>
    <Rating toCard={false} rating={this.state.newRating} ratingMovie={rating => this.setRating(rating)}/>

      </div>
    <Onemoviebox isLoading={this.state.loading} movies={this.state.listofmovies.filter(el => el.rating >= this.state.newRating && el.title.includes(this.state.name.toUpperCase().trim()))}/>
    <button className='add' onClick={this.addmovie}>Add your movie</button>
    </div>
  );
}}

export default App;
