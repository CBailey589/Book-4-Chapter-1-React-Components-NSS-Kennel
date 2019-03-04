import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employees/EmployeeList"
import AnimalsToOwners from './animals/AnimalsToOwners';
import OwnerList from "./animals/OwnerList"
import AnimalManager from "../modules/resourceManagers/AnimalManager"
import AnimalDetail from "./animals/AnimalDetail"
import EmployeeManager from '../modules/resourceManagers/EmployeeManager';
import LocationManager from '../modules/resourceManagers/LocationManager';
import OwnerManager from '../modules/resourceManagers/OwnerManager';
import AnimalOwnershipManager from '../modules/resourceManagers/AnimalOwnershipManager';


class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownerships: []
    }

    fireEmployee = (id) => {
        EmployeeManager.DELETE(id)
            .then(() => EmployeeManager.GETALL())
            .then(json => this.setState({ employees: json }))
    }

    removeCustomer = (id) => {
        OwnerManager.DELETE(id)
            .then(() => OwnerManager.GETALL())
            .then(json => this.setState({ owners: json }))
    }

    removeAnimal = (id) => {
        return AnimalManager.DELETE(id)
            .then(() => AnimalManager.GETALL())
            .then(json => this.setState({ animals: json }))
    }



    componentDidMount() {
        const newState = {}

        let prom1 = Promise.resolve(EmployeeManager.GETALL().then(json => newState.employees = json))
        let prom2 = Promise.resolve(LocationManager.GETALL().then(json => newState.locations = json))
        let prom3 = Promise.resolve(AnimalManager.GETALL().then(json => newState.animals = json))
        let prom4 = Promise.resolve(OwnerManager.GETALL().then(json => newState.owners = json))
        let prom5 = Promise.resolve(AnimalOwnershipManager.GETALL().then(json => newState.ownerships = json))
        Promise.all([prom1, prom2, prom3, prom4, prom5])
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <LocationList
                        TacoLocations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalsToOwners
                        {...props}
                        TacoAnimals={this.state.animals}
                        TacoOwners={this.state.owners}
                        TacoOwnerships={this.state.ownerships}
                        removeAnimal={this.removeAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail
                        {...props}
                        removeAnimal={this.removeAnimal}
                        TacoAnimals={this.state.animals} />
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