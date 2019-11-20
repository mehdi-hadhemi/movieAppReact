import React from 'react';
import Rating from './rating';
import HOC from './HOC'
    class Onemoviebox extends React.Component {
	    constructor(props) {
	        super(props)
	    }
	    render() {
	        return (
	            <div className="movies">
                    {this.props.movies.map((el, i) =>
                    <div className='onepic'>
	                        <img className='pic' src={el.image} width='200px'/>
	                        <p className='mytext'> {el.title}</p>

							<Rating toCard={true} className='rate' rating={el.rating} ratingMovie={()=>{}} />
                            </div>
                            )}
                        </div>
                    )

}}
export default HOC(Onemoviebox);