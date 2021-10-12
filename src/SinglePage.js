import { useEffect, useContext, useState } from "react";
import showsContext from "./context/showsContext";
import "./SingleShow.css";
import { Button } from "@mui/material";

function SinglePage({ match }) {
	const { getSingleShow, singleShow } = useContext(showsContext);

	useEffect(() => {
		getSingleShow(match.params.id);
	}, []);
	const removeTags = (text) => {
		if (text === null || text === "") {
			return false;
		} else {
			text = text.toString();
		}
		return text.replace(/(<([^>]+)>)/gi, "");
	};
	return (
		<>
			<div className="singleshow">
				<img
					src={
						singleShow.image
							? singleShow.image.medium
							: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
					}
					alt={singleShow.name}
				/>
				<div className="singleshow__info">
					<h1>{singleShow.name}</h1>
					{singleShow.genres &&
						singleShow.genres.map((genre) => (
							<span key={genre} className="singleshow__genre">
								{genre}
							</span>
						))}
					<p>
						<strong>Status:</strong> {singleShow.status && singleShow.status}
					</p>
					<p>
						<strong>Rating:</strong>{" "}
						{singleShow.rating ? singleShow.rating.average : "No rating"}
					</p>
					<p>
						<strong>Offical Site:</strong>{" "}
						{singleShow.officalSite ? (
							<a href={singleShow.officalSite} target="_blank" rel="noreferrer">
								{singleShow.officalSite}
							</a>
						) : (
							"No offical site"
						)}
					</p>
					<p>{singleShow.summary && removeTags(singleShow.summary)}</p>
				</div>
			</div>
			<div className="singleshow__book">
				<Button variant="contained">Book Ticket</Button>
			</div>
		</>
	);
}

export default SinglePage;
