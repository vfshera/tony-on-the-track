 import Vuex from 'vuex'
import Vue from 'vue'

 Vue.use(Vuex)
let localReadBlog = localStorage.getItem('readBlog');
let localDrum = localStorage.getItem('viewDrumkit');
let localBeat = localStorage.getItem('viewBeat');

 export default  new Vuex.Store({
     state:{
         readBlog: (localReadBlog) ? JSON.parse(localReadBlog) : {},
         currDrumkit: (localDrum) ? JSON.parse(localDrum) : {},
         currBeat: (localBeat) ? JSON.parse(localBeat) : {},
         csrftoken: "",
         isPlayerMax: false,
         loggedUser: null,
         PlayerSeen: false,
         currentSong: null,
         beats:[]
     },
     getters:{
         getCSRFTOKEN(state){
             return state.csrftoken;
         },
         getPlayerState(state){
             return state.isPlayerMax;
         },
         getPlayerVisibility(state){
             return state.PlayerSeen;
         },
         getLoggedUser(state){
             return state.loggedUser;
         },
         getSong(state){
             return state.currentSong;
         },
         getBeats(state){
             return state.beats
         },
         getReadBlog(state){
            return state.readBlog;
         } ,
         getCurrDrumkit(state){
            return state.currDrumkit;
         },
         getCurrBeat(state){
            return state.currBeat;
         }
     },
     mutations: {
         setCSRF(state,token) {
             state.csrftoken = token;
         },
         setPlayerState(state,playerState){
             state.isPlayerMax = playerState
         },
         setLoggedUser(state,user){
             state.loggedUser = user
         },
         setSong(state , song){
            state.currentSong = song
         },
         setPlayerVisibility(state, visibility){
              state.PlayerSeen = visibility;
         },
         setReadBlog(state, blog){
             state.readBlog = blog;
         },
         setViewDrumkit(state, drumkit){
             state.currDrumkit = drumkit;
         },
         setViewBeat(state, track){
             state.currBeat = track;
         },
         setBeats(state, beats){
             state.beats = beats;
         },

     },
     actions: {
         fetchUser(context){
           context.commit('setCSRF',token);
         },
         setPlayerState(context){
             context.commit('setPlayerState',newPlayerState);
         },
         setReadBlog(context){
             context.commit('setReadBlog',blog);
         }
     }
 })

