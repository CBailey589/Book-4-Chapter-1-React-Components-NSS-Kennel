import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from "./LocationList"
import EmployeeList from "./EmployeeList"
import AnimalsToOwners from './AnimalsToOwners';

class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownerships: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/employeesFromAPI")
            .then(r => r.json())
            .then(json => newState.employees = json)
            .then(() => fetch("http://localhost:5002/locationsFromAPI")
            .then(r => r.json()))
            .then(json => newState.locations = json)
            .then(() => fetch("http://localhost:5002/animalsFromAPI")
            .then(r => r.json()))
            .then(json => newState.animals = json)
            .then(() => fetch("http://localhost:5002/ownersFromAPI")
            .then(r => r.json()))
            .then(json => newState.owners = json)
            .then(() => fetch("http://localhost:5002/ownershipsFromAPI")
            .then(r => r.json()))
            .then(json => newState.ownerships = json)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <LocationList TacoLocations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={() => {
                    return <AnimalsToOwners TacoAnimals=
                        {this.state.animals}
                        TacoOwners=
                        {this.state.owners}
                        TacoOwnerships=
                        {this.state.ownerships} />
                }} />
                <Route exact path="/employees" render={() => {
                    return <EmployeeList TacoEmployees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews