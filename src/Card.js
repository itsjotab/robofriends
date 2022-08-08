import React from "react";
import "./Card.css";



const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robot' src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>name: {name}</h2>
            </div>
            <div>
                <p>email: {email}</p>
            </div>
        </div>
    );
}

export default Card;