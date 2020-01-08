import React from 'react';

export default class Form extends React.Component {
  state = {
    error: undefined,
    numericode: '',
  }

  handleDecoding = (e) => {
    e.preventDefault();

    const numericode = e.target.elements.user.value.trim();
    const error = this.props.handleDecoding(numericode)

    this.setState(() => ({error}));
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ numericode: value });
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.numericode !== nextProps.numericode) {
      this.setState({numericode: nextProps.numericode})
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('error');
      const error = JSON.parse(json);
      if (error) {
        this.setState(() => ({error}));
      }
    } catch(e) {
      // do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error != this.state.error) {
      const json = JSON.stringify(this.state.error);
      localStorage.setItem('error', json);
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleDecoding}>
          <div htmlFor="numericode">Enter your numericode:</div>
          <textarea name="user" value={this.state.numericode} onChange={this.handleChange} autoFocus autoComplete="off"/>
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
