import React from 'react';
import loadingGif from "../images/gif/loading-arrow.gif";


export default function(){
    return(
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="loading"></img>
        </div>
    );
}