import {SEARCH_MOVIE, SEARCH_RATING, ADD_MOVIE, REMOVE_MOVIE,EDIT_MOVIE } from '../actions/actionstypes' 



const initialState = {
    moviesList:[
        { id:0,
          img:
            "https://img-4.linternaute.com/cip2YBDZkVvjU4a2tqiFIaf6Yhw=/1240x/a9bfc660898e44a19d2d36f463c9c955/ccmcms-linternaute/124775.jpg",
          rate: 3,
          name: "AVATAR",
          genre:'Science Fiction',
          year: 'Oct 3 2018',
          runtime: '112 min',
          trailer:'6ziBFh3V1aM',
        },
        {
          id:1, 
          img:
            "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
          rate: 4,
          name: "TITANIC",
          genre : 'Romantic',
          year : 'Jan 08 2010',
          runtime: '112 min',
          trailer:'kVrqfYjkTdQ'
        },
        { id:2,
          img:
            "https://static.hitek.fr/img/actualite/8z5qpxzhcsgkp7h6dv6jyfbwneg.jpg",
          rate: 1,
          name: "HOBBS & SHAW",
          genre : 'Action',
          year : 'juin 17 2018',
          runtime: '112 min',
          trailer : 'HZ7PAyCDwEg',

        },
        { id:3,
          img:
            "https://static.hitek.fr/img/up_m/1734427137/x-men-dark-phoenix-fan-poster-marvel-studios-cinematic-universe-1120092.jpeg",
          rate: 5,
          name: "X-MEN",
          genre : 'Science Fiction',
          year : 'Feb 04 2017',
          runtime: '112 min',
          trailer:'VNxwlx6etXI',
        },
        { id:4,
          img:
            "https://static.hitek.fr/img/actualite/creed-ii-affiche-officielle-1040206.jpg",
          rate: 2,
          name: "GREED II",
          genre : 'Adventure',
          year : 'Sep 04 2018',
          runtime: '112 min',
          trailer:'ovFpFtZ2Tvk'
        },
        { id:5,
          img:
            "https://resize-parismatch.lanmedia.fr/r/901,,forcex/img/var/news/storage/images/paris-match/culture/cinema/l-annee-cinema-2019-en-cent-films-1597759/glass-de-m-night-shyamalan/25884276-1-fre-FR/Glass-De-M.-Night-Shyamalan.jpg",
          rate: 5,
          name: "GLASS",
          genre : 'Action',
          year : 'Feb 04 2017',
          runtime: '112 min',
          trailer:'aBL6COBGjCA'
        },
        { id:6,
          img: "https://cdn-static.egybest.net/serve/movies/art-2872192401-x175.jpg",
          rate: 2,
          name: "HOLLY SLEPT OVER",
          genre : 'Comedy',
          year : 'Feb 10 2016',
          runtime: '112 min',
          trailer : 'Xi8lXh4_BPA'
        },
       ],
    inputSearch:'',
    ratingSearch: 0
};




const reducerMovies = (state=initialState,action)=>{
switch (action.type){
  case SEARCH_RATING :
    return {...state,ratingSearch : action.payload}
  case SEARCH_MOVIE :
    return {...state,inputSearch : action.payload}
  case ADD_MOVIE :
    return {...state,moviesList : state.moviesList.concat(action.payload)}
  case REMOVE_MOVIE : 
    return {...state,moviesList:state.moviesList.filter((film,i)=>film.id!==action.payload)} 
  case EDIT_MOVIE:
    return {...state, moviesList:state.moviesList.map((film,i)=>(film.id===action.id)?{...film,rate:action.rate,name:action.name,img:action.img}:film)}
  default : 
    return state  
}

}
export default reducerMovies


