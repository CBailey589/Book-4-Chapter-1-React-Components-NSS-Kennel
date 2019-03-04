import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./Animals.css"

class AnimalsToOwners extends Component {
    render() {
        let petsWithOwners = this.props.TacoAnimals.map((animal) => {
            let obj = {}
            obj.id = animal.id
            obj.animal = animal.animal
            obj.ownerArray = this.props.TacoOwnerships.filter((pairing) => {
                return pairing.animalId === animal.id
            })
                .map((ownershipObj) => {
                    return this.props.TacoOwners.filter((owner) => {
                        return owner.id === ownershipObj.ownerId
                    })
                        .map((ownerObj) => {
                            return ownerObj.name
                        })
                })
            return obj
        }).map((animalObj) => {
            animalObj.ownerArray = animalObj.ownerArray.flat(2)
            return animalObj
        })

        return (

            <section className="animalsToOwners">
                <h3>Meet our animals and their owners!</h3>
                {
                    petsWithOwners.map(pet =>
                        <section key={pet.id} className="card">
                            <h4 >
                                <img src={dog} className="icon--dog" alt="" />
                                {pet.animal} and {pet.animal.split(" ")[0]}'s owners:
                            </h4>
                            {
                                pet.ownerArray.map((owner, index) =>
                                    <div key={index}>
                                        {owner}
                                    </div>
                                )
                            }
                            <Link className="nav-link" to={`/animals/${pet.id}`}>Details</Link>
                            <button
                            onClick={() => this.props.removeAnimal(pet.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</button>
                        </section>
                    )
                }
            </section>
        )
    }
}


export default AnimalsToOwners