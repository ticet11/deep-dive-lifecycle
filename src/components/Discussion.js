import React, { Component } from "react";

class Discussion extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Discussion",
            currentTime: String(new Date()),
        };
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            console.log("Again?");
            this.setState({ currentTime: String(new Date()) });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

    render() {
        const { pageTitle, currentTime } = this.state;
        return (
            <div>
                <h1>{pageTitle}</h1>
                <div>{currentTime}</div>
            </div>
        );
    }
}

export default Discussion;
