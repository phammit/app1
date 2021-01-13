import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './HomePage';
import Gallery from './ProductsGallery';

const Router = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route 
                    exact path="/"
                    component={Home}
                />
                <Route 
                    exact path="/productsGallery"
                    component={Gallery}
                /> 
            </Switch>    
        </React.Fragment>
    )
}

export default Router;