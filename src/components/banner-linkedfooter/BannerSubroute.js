import React from 'react';
import './BannerSubroute.css';

function BannerSubroute({title, content, primary}) {
    return (
        <div className="banner__linkedfooter">
            <p className="banner__linkedtext">{primary ? primary : <></>}</p>
            <h1>{title}</h1>
            <div className="seprator__line pp"></div>
            <p className="banner__linkedtext">{content}</p>
        </div>
    )
}

export default BannerSubroute
