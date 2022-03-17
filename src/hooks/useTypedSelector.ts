import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../store/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
