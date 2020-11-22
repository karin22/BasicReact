import React, { useState } from 'react'
import VocabController from './VocabController';


// 1 .crate context 
const AppContext = React.createContext();

// 2. create provider component
export const AppProvider = (props)=>{

    const vocabController = VocabController();

    const value = {
        vocabController
    }

    return (
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
    )
}

export default AppContext;

// 3. wrap app with provider component => App.js

//4. call use Appcontext  => any component 