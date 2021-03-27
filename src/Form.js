import React, {Component} from 'react'


class Form extends Component {
    initialState = {
      title: '',
      description: '',
    }
    
    state = this.initialState

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value,
      })
    }

    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }

    render() {
      const { title, description } = this.state;
    
      return (
        <div className="form-container">
            <h2>Add Task</h2>
            <form>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange} />
                <br />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={this.handleChange} />

                <br />
                <br />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        </div>
      );
    }
}

export default Form;