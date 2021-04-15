import React from "react";
import ReactDOM from "react-dom";

class Greeter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date() }), 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.props.message} <span>{this.state.time.toUTCString()}</span>
            </div>
        );
    }
}
ReactDOM.render(<Greeter message="The time is: " />, document.getElementById("root"));