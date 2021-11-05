import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';
export default class NameTag extends Component {
    state = {
      personName: '',
      greetingMessage:''
    };
  
    handlePersonNameChange = (event) => {
      this.setState({ personName: event.target.value });
    };
    handleGreetingMessageChange = (event) => {
      this.setState({ greetingMessage: event.target.value });
    };

  
    render() {
      const { personName, greetingMessage } = this.state;
  
  
      return (
        <>
          <Controls personNameChange={this.handlePersonNameChange}
            greetingMessageChange={this.handleGreetingMessageChange}
            onSubmit={this.handleSubmit}
          />
  
          <Display personName={personName}
            greetingMessage={greetingMessage}
          />
      
        </>
      );
    }
}
  
