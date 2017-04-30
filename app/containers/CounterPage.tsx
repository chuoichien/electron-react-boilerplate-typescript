import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';
import {Counter} from '../components/Counter';
import * as CounterActions from '../actions/counter';
import {ICounterProps} from "../components/Counter";

function mapStateToProps(state : ICounterProps) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch : Dispatch<any>) {
  return bindActionCreators((CounterActions as any), dispatch);
}

export const CounterPage = connect(mapStateToProps, mapDispatchToProps)(Counter) as any;
