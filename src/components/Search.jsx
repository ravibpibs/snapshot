import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "./Container";
import Error from "./Error";

const Search = ({ searchTerm }) => {
	const { error } = useSelector((state) => state.images);
	const { searchInput } = useParams();
	if (error) {
		return <Error error={error} />;
	}
	return (
		<div>
			<Container searchTerm={searchInput} />
		</div>
	);
};

export default Search;
