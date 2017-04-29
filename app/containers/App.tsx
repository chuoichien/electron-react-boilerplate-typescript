import * as React from 'react';
import { Children } from 'react';

export interface IAppProps {
	children? : typeof Children
}

export default class App extends React.Component<IAppProps, void> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
