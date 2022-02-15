import React, {useReducer} from 'react';
import { applyNumber, changeOperation, clearTotal, applyMem, saveMem, clearMem} from '../actions';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNum = (e) => {
    const {value} = e.target
    dispatch(applyNumber(value))
  }
  
  const handleOperation = (e) => {
    const {value} = e.target 
    dispatch(changeOperation(value))
  }
  
  const handleClear = () => {
    dispatch(clearTotal())
  }
  
  const handleMemApply = () => {
    dispatch(applyMem(state.total))
  }
  
  const handleMemSave = (e) => {
    const {value} = e.target 
    dispatch(saveMem(value))
  }

  const handleMemClear = () => {
    dispatch(clearMem());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {handleMemSave} value={"M+"}/>
              <CalcButton onClick = {handleMemApply} value={"MR"}/>
              <CalcButton onClick = {handleMemClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNum} value={1}/>
              <CalcButton onClick = {handleApplyNum} value={2}/>
              <CalcButton onClick = {handleApplyNum} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNum} value={4}/>
              <CalcButton onClick = {handleApplyNum} value={5}/>
              <CalcButton onClick = {handleApplyNum} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNum} value={7}/>
              <CalcButton onClick = {handleApplyNum} value={8}/>
              <CalcButton onClick = {handleApplyNum} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleOperation} value={"+"}/>
              <CalcButton onClick = {handleOperation} value={"*"}/>
              <CalcButton onClick = {handleOperation} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
