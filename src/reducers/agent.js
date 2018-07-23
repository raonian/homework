import { fetchData } from '../sagas/agent';

export default function agent(state, action) {
    return {
        ...state,
        ...action.payload
    };
}