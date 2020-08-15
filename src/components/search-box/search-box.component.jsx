import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, peppers }) => (
	<input
		className="search"
		type="search"
		placeholder={placeholder}
		onChange={peppers}
	/>
);
