export default (
    state = {loading: false, items: [], search: 'earth'},
    action
) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, loading: true, search: action.search};
        case 'FETCH_SUCCESS':
            return {...state, loading: false, items: action.payload || []};
        case 'FETCH_FAIL':
            return {...state, loading: false};
        default:
            return state;
    }
}