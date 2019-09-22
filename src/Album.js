import React from "react";
import "./Album.css";

const Album = ({ album }) => (
    <div className="main-wrapper">
        <div className="album-img">
            <img src={album.images[0].url} alt="" />
        </div>
        <div className="side-info">
            <div className="album-name">{album.name}</div>
            <div className="artist-name">
                {album.artists[0].name}
            </div>
        </div>
    </div>
);

export default Album;
