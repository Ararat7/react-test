import axios from "axios/index";

import {mediaUrl} from "../services/urls";

export const fetchStart = (search) => {
    return {
        type: 'FETCH_START',
        search
    };
};

export const fetchSuccess = payload => {
    return {
        type: 'FETCH_SUCCESS',
        payload
    };
};

export const fetchFail = error => {
    return {
        type: 'FETCH_FAIL',
        error
    };
};

export const fetchList = search => dispatch => {
    if (!search) return;
    dispatch(fetchStart(search));
    axios.get(mediaUrl({search}))
        .then(response => {
            let payload = response.data.collection.items.slice(0, 5);
            dispatch(fetchSuccess(payload));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
};