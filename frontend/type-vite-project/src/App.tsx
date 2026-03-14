import { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

interface AppState {
  header: string;
  content: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      header: 'Hello React + TypeScript',
      content: 'State is managed in the parent component'
    };
  }

  render() {
    return (
      <div className="card">
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}

export default App;
