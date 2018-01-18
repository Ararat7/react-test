import axios from "axios/index";

import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from "./listActionNames";

export const fetchStart = (search) => {
    return {
        type: FETCH_START,
        search
    };
};

export const fetchSuccess = payload => {
    return {
        type: FETCH_SUCCESS,
        payload
    };
};

export const fetchFail = error => {
    return {
        type: FETCH_FAIL,
        error
    };
};

export const fetchList = search => dispatch => {
    if (!search) {
        return;
    }

    dispatch(fetchStart(search));
    axios.get('https://images-api.nasa.gov/search?year_start=2017&media_type=image&q=' + search)
        .then(response => {
            let payload = response.data.collection.items.slice(0, 5);
            dispatch(fetchSuccess(payload));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
};