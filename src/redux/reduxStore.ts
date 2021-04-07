import { createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import faq from "../redux/reducers/faq";

const rootReducer = combineReducers({ faq });

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;

let store = createStore(rootReducer);

export default store;
