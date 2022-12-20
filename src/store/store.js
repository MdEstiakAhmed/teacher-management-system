import React, { createContext, useReducer } from 'react';
import userReducer, { handleUser } from './user/reducer';

const Context = createContext();

const Provider = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, {});
    const userAction = handleUser(userDispatch);

    let contextValue = {
        userState,
        userAction
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, Provider };