import React from "react";
import "./Show.css";
import { Link } from "react-router-dom";

function Show({ name, image, rating, id }) {
	return (
		<Link to={`/singleshow/${id}`} className="show">
			<img src={image} alt="" />
			<div className="show__content">
				<h2>{name}</h2>
				<p>{rating}</p>
			</div>
		</Link>
	);
}

export default Show;
