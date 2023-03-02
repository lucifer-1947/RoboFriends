import React, { Component } from "react";
import './App.css'
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    render() {

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length) {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
        else {
            return <h1>Loading...</h1>
        }


    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((respone) => respone.json())
            .then((users) => this.setState({ robots: users }))
            .catch((error) => console.log(error))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

}

export default App
