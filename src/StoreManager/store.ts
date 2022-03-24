import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { reducer } from './reducer'
import { produce } from 'immer'
import { State } from '../Types/Types'

// import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))




const state = {}


const updatedState = produce(state,((draftState:State)=>{
    draftState.isLoogedIn=true
}))






console.log(updatedState);

export default store
