import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input:''
        }
    }

    handleInputChange = (value) => {
        this.setState({ input: value})
    }

    doAdd = () => {
        this.props.add(this.state.input)
        this.setState({ input:''})
    }


    render() {
        return (
            <div>
                <input value={this.state.input}
                placeholder = 'Enter new task'
                onChange = {(element) => this.handleInputChange(element.target.value)} />
                <button onClick={this.doAdd}>Add</button>
            </div>
        )
    }
}
