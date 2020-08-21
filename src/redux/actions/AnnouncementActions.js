import actionTypes from '../actionTypes';
import axios from 'axios';

export const fetchAnnouncement = () => (dispatch) => {
    dispatch(setLoaded(false));
    const localItems = JSON.parse(localStorage.getItem("items"));
    if(localItems === null){
        axios.get('announcement/db.json')
        .then(({data})=> {
                dispatch(setAnnouncement(data.announcement));
                localStorage.setItem("items", JSON.stringify(data.announcement));
        })
        .catch((e)=> {
           alert('Not found!')
        })
    }
    else{
        dispatch(setAnnouncement(localItems));
    }
}

export const setLoaded = val => ({
    type: actionTypes.SET_LOADED,
    payload: val
});

export const setAnnouncement = items => ({
    type: actionTypes.SET_ANNOUCEMENT,
    payload: items
});

export const addAnnouncement = item => ({
    type: actionTypes.ADD_ANNOUCEMENT,
    payload: item,
});

export const removeAnnouncement = id => ({
    type: actionTypes.REMOVE_ANNOUCEMENT,
    payload: id
});

export const editAnnouncement = item => ({
    type: actionTypes.EDIT_ANNOUCEMENT,
    payload: item
});

export const setTitleFast = val => ({
    type: actionTypes.SET_TITLE_FAST,
    payload: val
});

