const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            {
                setInterval(() => {}, 1000);
                state = {
                    ...state,
                    fetching: true
                }
                break
            }

        case 'FETCH_USERS_FULFILLED':
            {
                state = {
                    ...state,
                    fetching: false,
                    fetched: true,
                    users: action.payload
                }
                break;
            }

        case 'FETCH_USERS_REJECTED':
            {
                state = {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
                break;
            }
        default:
           
            break;
    }
    return state;
}