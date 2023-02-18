import React, { createContext, useState } from 'react';

export const Context = createContext();

const StateManage = ({children}) => {
    const [state, setStates] = useState(false)
    // console.log(state)
    const Info = {
        state,
        setStates
    }
    return (
        <Context.Provider value={Info}>
            {children}
        </Context.Provider>
    );
};

export default StateManage;