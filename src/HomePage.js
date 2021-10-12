import React, { useEffect, useState } from "react";
import Show from "./Show";
import "./HomePage.css";

function HomePage() {
	const [show, setShow] = useState([]);
	const BASE_URL = "https://api.tvmaze.com/search/shows?q=all";
	useEffect(() => {
		const getData = async () => {
			await fetch(BASE_URL)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					setShow(data);
				});
		};
		getData();
	}, []);
	return (
		<div>
			<div className="shows__list">
				{show.map((item) => (
					<Show
						key={item.show.id}
						id={item.show.id}
						name={item.show.name}
						image={
							item.show.image
								? item.show.image.original
								: "https://www.publicdomainpictures.net/pictures/28000/velka/not-found-image-153838647871u.jpg"
						}
						rating={
							item.show.rating.average ? item.show.rating.average : "no rating"
						}
					/>
				))}
			</div>
		</div>
	);
}

export default HomePage;
