import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import { ContextProvider } from '../Context/Context';
import Home from '../pages/Home';
import '../styles/global.scss';

const App:React.FC = () => {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </ContextProvider>
    )
}

export default App;
