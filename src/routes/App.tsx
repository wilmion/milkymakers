import React, {lazy , Suspense} from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const ProductInformation = lazy(() => import('../pages/ProductInformation'));
const NotFound = lazy(() => import('../pages/NotFound'));

import '../styles/global.scss';

const App:React.FC = () => {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/product/:id' component={ProductInformation} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
