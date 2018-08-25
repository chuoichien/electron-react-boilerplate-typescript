import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counter';
import { Counter } from '../components/Counter';
import { counterStateType, Dispatch } from '../reducers/types';

function mapStateToProps (state : counterStateType) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps (dispatch : Dispatch) {
  return bindActionCreators(CounterActions as any, dispatch);
}

export const CounterPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter as any);
