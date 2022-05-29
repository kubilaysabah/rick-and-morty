import { combineReducers } from "@reduxjs/toolkit";
import { API } from "state/services";

const rootReducer = combineReducers({
    [API.reducerPath]: API.reducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;