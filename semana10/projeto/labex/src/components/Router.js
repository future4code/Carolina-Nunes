import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import AppForm from './AppForm/AppForm';
import LoginPage from './LoginPage/LoginPage';
import CreateTrip from './CreateTrip/CreateTrip'
import ListTrip from './ListTrips/ListTrips'
import DetailTrip from './DetailTrip/DetailTrip'
import Header from './Header';
import Footer from './Footer';
import ListTripAdm from './ListTripsAdm/ListTripsAdm'
import CandidatesTrip from './CandidatesTrip/CandidatesTrip'

export default function Router(){

    return(
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/application-form">
                        <AppForm />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/trips/create">
                        <CreateTrip />
                    </Route>
                    <Route exact path="/trips/list">
                        <ListTrip />
                    </Route>
                    <Route exact path="/trips/details/:id">
                        <DetailTrip />
                    </Route>
                    <Route exact path="/trips/list/admin">
                        <ListTripAdm />
                    </Route>
                    <Route exact path="/trips/candidates/admin">
                        <CandidatesTrip />
                    </Route>
                    <Route>
                        <div>Erro (404)</div>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>

    )
}