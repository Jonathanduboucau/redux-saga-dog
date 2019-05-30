// Types 
const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILLURE = 'API_CALL_FAILLURE';

// Reducer intial state
const initialState = {
    fetching: false,
    image: null,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, image: action.image };
        case API_CALL_FAILLURE:
            return { ...state, fetching: false, image: null, error: true };
        default:
            return state;
    }
}