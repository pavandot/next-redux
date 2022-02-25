import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { mediaReducer } from "./reducers";
import thunk from "redux-thunk";

const makeStore = () => createStore(mediaReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug: true });
