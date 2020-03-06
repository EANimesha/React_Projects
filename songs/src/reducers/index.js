import {combineReducers} from 'redux';


const songsReducer=()=>{
    return[
        {title:'No scrubs',duration:'2.05'},
        {title:'foo scrubs',duration:'5.05'},
        {title:'ABCD',duration:'1.05'},
        {title:'Hearts',duration:'5.05'},
    ]
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});
