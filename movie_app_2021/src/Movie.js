import React from "react";
import propType from "prop-types"

function Movie({id, title, summary, poster}) {
	return (
		<h4>{title}</h4>
	);
}

Movie.propType = {
	id: propType.number.isRequired,
	title: propType.string.isRequired,
	summary: propType.string.isRequired,
	poster: propType.string.isRequired
}

export default Movie;