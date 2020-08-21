import actionTypes from '../actionTypes';

const initialState = {
    announcementsItems: [],
    titleFast: '',
    isLoaded: false,
    isFetch: true,
}

const Announcement = (state=initialState, action)=> {
    switch (action.type) {

        case actionTypes.SET_ANNOUCEMENT: {
            return {
                ...state,
                announcementsItems: action.payload,
                isLoaded: true,
                isFetch: false
            }
        }

        case actionTypes.SET_LOADED: {
            return {
                    ...state,
                    isLoaded: action.payload,
            }
        }

        case actionTypes.ADD_ANNOUCEMENT: {
            localStorage.setItem("items", JSON.stringify(state.announcementsItems.concat(action.payload)))
            return {
                ...state,
                announcementsItems: state.announcementsItems.concat(action.payload),
            }
        }

        case actionTypes.REMOVE_ANNOUCEMENT: {
            const newAnnouncementsItems = state.announcementsItems.filter((item)=>{
                if(item.id !== action.payload){
                    return item;
                }
            })
            localStorage.setItem("items", JSON.stringify(newAnnouncementsItems))
            return{
                ...state,
                announcementsItems: newAnnouncementsItems
            }
        }

        case actionTypes.EDIT_ANNOUCEMENT: {
            const newAnnouncementsItems = state.announcementsItems.map(elem=>{
                if(elem.id === action.payload.id){
                    return action.payload;
                }
                else{
                    return elem;
                }
            })
            localStorage.setItem("items", JSON.stringify(newAnnouncementsItems))
            return{
                ...state,
                announcementsItems: newAnnouncementsItems
            }
        }

        case actionTypes.SET_TITLE_FAST: {
            return {
                ...state,
                titleFast: action.payload
            }
        }

            
        default: return state;
    }
}

export default Announcement;