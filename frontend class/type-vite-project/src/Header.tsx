import { Component } from 'react';

interface HeaderProps {
  headerProp: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return <h1>{this.props.headerProp}</h1>;
  }
}

export default Header;
