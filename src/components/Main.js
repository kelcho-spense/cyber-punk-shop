import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
import { useState } from "react";
import { useEffect } from "react";

const Main = ({ selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [punkListData,selectedPunk])

    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img 
                            className="selectedPunk"
                            src={activePunk.image_original_url}
                            alt="nopic"
                        />
                    </div> 
                </div>
                <div className="punkDetails" style={{color:'#fff'}}>
                    <div className="title">{activePunk.name}</div> 
                    <div className="itemNumber">*#{activePunk.token_id}</div> 
                </div> 
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img
                            src={activePunk.owner.profile_img_url}
                            alt="nopic"
                        />
                    </div>
                    <div className="ownerDetails">
                         <div className="ownerNameAndHandle">  
                            <div className="">activePunk.owner.address</div> 
                            <div className="ownerHandle">@kelcho</div>                     
                        </div>
                        <div className="ownerLink">
                            <img src ={instagramLogo} alt="nopic" />
                        </div>
                        <div className="ownerLink">
                            <img src ={twitterLogo} alt="nopic" />
                        </div>
                        <div className="ownerLink">
                            <img src ={moreIcon} alt="nopic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
