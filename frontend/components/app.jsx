import React from 'react';
import { Switch, Route } from 'react-router-dom' ;

import PetIndexContainer from './pet/pet_index_container';
import PetShowContainer from './pet/pet_show_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={PetIndexContainer} />
        <Route exact path="/pets" component={PetIndexContainer} />
        <Route exact path="/pets/:petId" component={PetShowContainer} />
        <Route component={PetIndexContainer} />
    </Switch>
);

export default App;