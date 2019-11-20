import React from 'react'

const Rating = props => {
  // ★  ✩
    let arrOfStars = []
    for(let i = 0 ; i < 5; i++){
        if(props.rating > i){
            arrOfStars.push(<span  onClick={() => props.ratingMovie(i+1)}>★</span>)
        }else{
            arrOfStars.push(<span onClick={() => props.ratingMovie(i+1)}>✩</span>)
        }
    }
    return (
        <div className={props.toCard ? 'star' : 'star-filter'}> 
            {arrOfStars}
        </div>
        )
    }


export default Rating