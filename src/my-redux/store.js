import {createStore} from 'redux'
import Reducer from './reducer'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(Reducer, 
    persistedState)

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })
export default store
