import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ""
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			//response.json() turns are response into json so we can easily read it
			.then((response) => response.json())
			.then((usersArr) => this.setState({ monsters: usersArr }))
			.catch((err) => console.log("ERROR", err));
	}

	handleChange = (event) => {
		this.setState({
			searchField: event.target.value
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Roledex</h1>
				<SearchBox placeholder="Search Monsters" peppers={this.handleChange} />

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
export default App;
