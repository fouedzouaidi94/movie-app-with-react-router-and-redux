import { SEARCH_MOVIE, SEARCH_RATING, ADD_MOVIE,REMOVE_MOVIE, EDIT_MOVIE} from "./actionstypes"

export const searchMovie =(payload)=>{
return {type:SEARCH_MOVIE,payload}
}

export const searchRating=(payload)=>{
    return {type:SEARCH_RATING, payload}
}

export const addMovie=(payload)=>{
    return {type:ADD_MOVIE,payload}
}

export const removeMovie=(payload)=>{
return {type:REMOVE_MOVIE,payload}
}


export const editMovie=(id,img,name,rate)=>{
    return {type:EDIT_MOVIE,id,img,name,rate}
}