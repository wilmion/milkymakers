import React, {lazy , Suspense} from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';


const Home = lazy(() => import('../pages/Home'));
const ProductInformation = lazy(() => import('../pages/ProductInformation'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cart = lazy(() => import('../pages/Cart'));
const Form = lazy(() => import('../pages/Form'));
const Payment = lazy(() => import('../pages/Payment'));

import '../styles/global.scss';

const App:React.FC = () => {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/product/:id' component={ProductInformation} />
                    <Route exact path='/checkout/cart' component={Cart} />
                    <Route exact path='/checkout/form' component={Form} />
                    <Route exact path='/checkout/payment' component={Payment} />
                    <Route component={NotFound} />
                    
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
