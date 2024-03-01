/* eslint-disable no-fallthrough */
import { createStore } from "redux"

const initialState = {
    isLogged:true,
    pageNow:'Home',
    Content_:'nothing',
    idPageNow: 0,
    input:'',
    hamburguer:true,
    header_inf:{
        header_is_visible:true
    },
    search_something:{
        change_results:0,
        search_on:false,
        error_request:{
            any_error:false,
            error_msg:''
        },
        only_music:{
            data:{},
            researched:false
        },
        playlist:{
            data:{},
            researched:false
        }
    }
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'NEW_RESULT_CONTENT_LINK':{
            const newState = {...state}
            newState.Content_ = {
                nome_musica :action.name,
                url_image :'https://i.scdn.co/image/ab67616d0000b27378125903d68e957edbe9b689',
                artist:'kamaitachi, supercombo'
            }
            return newState;
        }
        case 'CLICK_ICON_HEADER':{
            const newState = {...state}
            //newState.pageNow = action.page
            newState.idPageNow = action.id
            return newState
        }
        case 'CLICK_HAMBURGUER':{
            const newState = {...state}
            newState.hamburguer = !newState.hamburguer
            return newState
            
        }
        case 'CLOSE/OPEN_HEADER':{
            const newState = {...state}
            newState.header_inf.header_is_visible = !newState.header_inf.header_is_visible
            return newState
        }
        case 'SEARCH_MUSIC':{
            const newState = {...state}
            newState.search_something.only_music.data = action.data
            newState.search_something.only_music.researched = true
            return newState
        }
        case 'SEARCH_PLAYLIST':{
            const newState = {...state}
            newState.search_something.playlist.data = action.data
            newState.search_something.playlist.researched = true
            return newState
            
        }
        case 'START_NEW_SEARCH':{
            const newState = {...state}
            newState.search_something.search_on = !action.finished
            return newState
        }
        case 'ERROR_REQUEST':{
            const newState = {...state}
            newState.search_something.error_request.any_error = !action.msg_time_over
            newState.search_something.error_request.error_msg = action.error_msg
            return newState
            
        }
        case 'CHANGE_RESULT':{
            const newState = {...state}
            newState.search_something.change_results = action.changeto
            return newState
            
        }
        case 'UPDATE_INPUT_SEARCH':{
            const newState = {...state}
            newState.input= action.content
            return newState
        }

        default: return state;
    }
     
}
const store = createStore(reducer);

export default store;