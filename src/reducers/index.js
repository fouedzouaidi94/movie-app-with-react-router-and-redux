import {combineReducers} from 'redux'
import reducerMovies from './reducermovies'


export default combineReducers({
    Movies:reducerMovies,
})