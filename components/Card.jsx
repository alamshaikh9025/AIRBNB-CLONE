import React from "react";
import katie from "../images/katie-zaferes.png";
import mountainbike from "../images/mountain-bike.png";
import wedding from "../images/wedding-photography.png";

export default function Card(props) {
    let coverImgUrl;

    // Determine which image to use based on the event title
    switch (props.title) {
        case "Life Lessons with Katie Zaferes":
            coverImgUrl = katie;
            break;
        case "Group Mountain Biking":
            coverImgUrl = mountainbike;
            break;
        case "Learn Wedding Photography":
            coverImgUrl = wedding;
            break;
        default:
            coverImgUrl = null;
            break;
    }

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            
            {coverImgUrl && <img src={coverImgUrl} alt="Card Cover" className="card--image" />}
            <div className="card--stats">
                <img src="../images/star.png" alt="Star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
