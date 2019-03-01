import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employees/EmployeeList"
import AnimalsToOwners from './animals/AnimalsToOwners';
import OwnerList from "./animals/OwnerList"
import AnimalManager from "../modules/animals/AnimalManager"
import EmployeeManager from '../modules/employees/EmployeeManager';
import LocationManager from '../modules/locations/LocationManager';
import OwnerManager from '../modules/animals/OwnerManager';
import AnimalOwnershipManager from '../modules/animals/AnimalOwnershipManager';


class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownerships: []
    }

    fireEmployee = (id) => {
        fetch(`http://localhost:5002/employeesFromAPI/${id}`, {
            "method": "DELETE"
        })
            .then(() => fetch("http://localhost:5002/employeesFromAPI"))
            .then(r => r.json())
            .then(employees => this.setState({ employees: employees }))
    }

    removeCustomer = (id) => {
        fetch(`http://localhost:5002/ownersFromAPI/${id}`, {
            "method": "DELETE"
        })
        .then(()=> fetch("http://localhost:5002/ownersFromAPI"))
        .then(r => r.json())
        .then(owners => this.setState({ owners: owners}))
    }

    componentDidMount() {
        const newState = {}

        EmployeeManager.getAll()
            .then(json => newState.employees = json)
            LocationManager.getAll()
            .then(json => newState.locations = json)
            AnimalManager.getAll()
            .then(json => newState.animals = json)
            OwnerManager.getAll()
            .then(json => newState.owners = json)
            AnimalOwnershipManager.getAll()
            .then(json => newState.ownerships = json)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <LocationList
                        TacoLocations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={() => {
                    return <AnimalsToOwners
                        TacoAnimals={this.state.animals}
                        TacoOwners={this.state.owners}
                        TacoOwnerships={this.state.ownerships} />
                }} />
                <Route exact path="/employees" render={() => {
                    return <EmployeeList
                        TacoEmployees={this.state.employees}
                        fireEmployee={this.fireEmployee} />
                }} />
                <Route exact path="/customers" render={() => {
                    return <OwnerList
                        TacoOwners={this.state.owners}
                        removeCustomer={this.removeCustomer} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews