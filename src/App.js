import React, { Component } from 'react';
import Contacts from './components/contacts';

    class App extends Component {
      state = {
        contacts: []
      }
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <div>
            <div className="container">
            <Contacts contacts={this.state.contacts} />
          </div>
          </div>
        );
      }
    }

    export default App;

