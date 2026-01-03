import { Component } from 'react';

interface ContentProps {
  contentProp: string;
}

class Content extends Component<ContentProps> {
  render() {
    return <h2>{this.props.contentProp}</h2>;
  }
}

export default Content;
