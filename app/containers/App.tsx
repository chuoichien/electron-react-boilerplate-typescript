import * as React from 'react';

export class App extends React.Component {
  render () {
    return (
      <React.Fragment>{ this.props.children }</React.Fragment>
    );
  }
}
