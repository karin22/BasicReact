import React from 'react'
import {
    Switch,
    Route
   
  } from "react-router-dom";
import Topbar from '../components/Topbar';
import AddWordPage from './AddWordPage';
import HomePage from './HomePage';

const Main = () => {
    return (
        <div>
            <Topbar/>
            <Switch>
                <Route path='/add-word'>
                        <AddWordPage/>
                </Route>
                <Route path='/'>
                        <HomePage/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main
