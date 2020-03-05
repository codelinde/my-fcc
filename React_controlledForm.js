class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault() // prevent page refresh on submit
      this.setState({
        submit: this.state.input
      });

    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <input onChange = {this.handleChange.bind(this)} value={this.state.input}></input>
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };
  