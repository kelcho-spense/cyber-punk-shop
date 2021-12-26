import React from 'react'
import weth from "../assets/weth.png"
import "./CollectionCard.css"

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className="collectionCard">
            <img src={image} className=""/>
            <div className="details">
                <div className="name">
                    {name} <div className="id"> .#{id} </div>
                </div>
                <div className="name">
                     <div className="id">{"Theme : " + traits[1]?.value} </div>
                </div>             
                <div className="priceContainer">
                    <img src={weth} className="wethImage"alt="nopic" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
