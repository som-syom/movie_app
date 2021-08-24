import React from "react";
import propType from "prop-types"
import "./Movie.css";

function Movie({id, title, year, summary, poster, genres}) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="genres">
					{genres.map((genre, index) => <li className="genre" key={index}>{genre}</li>)}
				</ul>
				<p className="movie__summary">{summary}</p>
			</div>
		</div>
	);
}

Movie.propType = {
	id: propType.number.isRequired,
	title: propType.string.isRequired,
	year: propType.number.isRequired,
	summary: propType.string.isRequired,
	poster: propType.string.isRequired,
	genres: propType.arrayOf(propType.string).isRequired
}

export default Movie;