import React from 'react';


const Recipe = ({title, calories, image, shareAs, source}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <p>{shareAs}</p>
            <h4>{source}</h4>
            <img src={image} alt="img"></img>
            
        </div>
    );
}

export default Recipe;