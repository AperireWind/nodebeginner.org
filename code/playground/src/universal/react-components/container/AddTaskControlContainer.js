import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid";
import AddTaskControl from "../presentational/AddTaskControl"
import { addTaskCommand } from "../../redux-actions/commands"

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddTask: (taskTitle) => dispatch(addTaskCommand(taskTitle))
    };
};

class AddTaskControlContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv4();
        this.props.dispatchAddTask(title);
        this.setState({ title: "" });
    }

    render() {
        const { title } = this.state;
        return (
            <AddTaskControl handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={title} />
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTaskControlContainer);
