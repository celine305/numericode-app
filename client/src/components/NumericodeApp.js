import React from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';

export default class NumericodeApp extends React.Component {
  state = {
    originalMessage: '',
  };

  handleDecoding = (numericode) => {
    if(!(/^[0-9 {1,}]+$/g).test(numericode)) {
      this.setState(() => ({
        numericode,
        originalMessage: ''
      }));
      return 'Enter a valid numericode: it should only contain digits and spaces.'
    }

    this.setState(() => ({numericode}));
    fetch(`http://localhost:5000/decoder/${numericode}`)
      .then(res => res.json())
      .then(originalMessage => this.setState({originalMessage}))
  };

  componentDidMount() {
    try {
      const json1 = localStorage.getItem('numericode');
      const json2 = localStorage.getItem('originalMessage');

      const numericode = JSON.parse(json1);
      const originalMessage = JSON.parse(json2);
      if (numericode) {
        this.setState(() => ({numericode, originalMessage}));
      }
    } catch(e) {
      // do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.numericode != this.state.numericode) {
      const json1 = JSON.stringify(this.state.numericode);
      localStorage.setItem('numericode', json1);
    }

    if (prevState.originalMessage != this.state.originalMessage) {
      const json2 = JSON.stringify(this.state.originalMessage);
      localStorage.setItem('originalMessage', json2);
    }
  }

  render() {
    const subtitle = 'A message decoder';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Form
          handleDecoding={this.handleDecoding}
          numericode={this.state.numericode}
        />
        <Output
          originalMessage={this.state.originalMessage}
        />
      </div>
    )
  }
}
