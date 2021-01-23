import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Home from '../pages/Home';
import '../styles/global.scss';

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
