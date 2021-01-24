import React , {createContext} from 'react'
import useDataApi from '../hooks/useDataApi';
import { APIResponse } from '../models/interfaces';

export const Context:React.Context<any> = createContext({});

export const ContextProvider:React.FC = (props) => {
    const { response } = useDataApi('http://localhost:3000/data' , []);
    const { children } = props;
    return (
        <Context.Provider value={response}>
            {children}
        </Context.Provider>
    )
}

