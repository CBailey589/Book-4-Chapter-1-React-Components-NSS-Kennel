import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
// import AnimalList from "./AnimalList"
// import OwnerList from "./OwnerList"
import AnimalsToOwners from "./AnimalsToOwners"
import "../styles/Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        {
            id: 1,
            name: "Jessica Younker"
        },
        {
            id: 2,
            name: "Jordan Nelson"
        },
        {
            id: 3,
            name: "Zoe LeBlanc"
        },
        {
            id: 4,
            name: "Blaise Roberts"
        }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        {
            id: 1,
            name: "Nashville North",
            address: "500 Circle Way"
        },
        {
            id: 2,
            name: "Nashville South",
            address: "10101 Binary Court"
        }
    ]

    animalsFromAPI = [
        {
            id: 1,
            animal: "Daryl Dog"
        },
        {
            id: 2,
            animal: "Carl Cat"
        },
        {
            id: 3,
            animal: "Louis Lizard"
        },
        {
            id: 4,
            animal: "Robert Rabbit"
        },
        {
            id: 5,
            animal: "Tim Tarantula"
        },
        {
            id: 6,
            animal: "Barry Bird"
        },
        {
            id: 7,
            animal: "Gary Goldfish"
        },
        {
            id: 8,
            animal: "Isaac Iguana"
        },
        {
            id: 9,
            animal: "Sam Snake"
        },
        {
            id: 10,
            animal: "Ricky Raccoon"
        },
        {
            id: 11,
            animal: "Perry Parakeet"
        },
    ]

    ownersFromAPI = [
        {
            id: 1,
            name: "Ryan Tanay",
        },
        {
            id: 2,
            name: "Emma Beaton"
        },
        {
            id: 3,
            name: "Dani Adkins"
        },
        {
            id: 4,
            name: "Adam Oswalt"
        },
        {
            id: 5,
            name: "Fletcher Bangs"
        },
        {
            id: 6,
            name: "Angela Lee"
        }
    ]

    ownershipsFromAPI = [
        {
            id: 1,
            animalId: 1,
            ownerId: 1
        },
        {
            id: 2,
            animalId: 1,
            ownerId: 2
        },
        {
            id: 3,
            animalId: 2,
            ownerId: 1
        },
        {
            id: 4,
            animalId: 2,
            ownerId: 2
        },
        {
            id: 5,
            animalId: 3,
            ownerId: 3
        },
        {
            id: 6,
            animalId: 4,
            ownerId: 4
        },
        {
            id: 7,
            animalId: 4,
            ownerId: 5
        },
        {
            id: 8,
            animalId: 4,
            ownerId: 6
        },
        {
            id: 9,
            animalId: 5,
            ownerId: 4
        },
        {
            id: 10,
            animalId: 5,
            ownerId: 5
        },
        {
            id: 11,
            animalId: 5,
            ownerId: 6
        },
        {
            id: 12,
            animalId: 6,
            ownerId: 4
        },
        {
            id: 13,
            animalId: 6,
            ownerId: 5
        },
        {
            id: 14,
            animalId: 6,
            ownerId: 6
        },
        {
            id: 15,
            animalId: 7,
            ownerId: 5
        },
        {
            id: 16,
            animalId: 8,
            ownerId: 6
        },
        {
            id: 17,
            animalId: 9,
            ownerId: 1
        },
        {
            id: 18,
            animalId:  9,
            ownerId: 2
        },
        {
            id: 20,
            animalId: 11,
            ownerId: 6
        }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI,
        ownerships: this.ownershipsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList TacoLocations={this.state.locations} />
                <EmployeeList TacoEemployees={this.state.employees} />
                <AnimalsToOwners TacoAnimals=
                    {this.state.animals}
                    TacoOwners=
                    {this.state.owners}
                    TacoOwnerships=
                    {this.state.ownerships} />
            </article>
        )
    }
}

export default Kennel