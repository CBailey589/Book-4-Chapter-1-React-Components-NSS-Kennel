import React, { Component } from 'react'
// import { debug } from 'util';


class AnimalsToOwners extends Component {
    render() {
        let petsWithOwners = this.props.TacoAnimals.map((animal) => {
            let obj = {}
            obj.id = animal.id
            obj.animal = animal.animal
            obj.ownerArray = this.props.TacoOwnerships.filter((pairing) => {
                return pairing.animalId === animal.id
            }).map((ownershipObj) => {
                return this.props.TacoOwners.filter((owner) => {
                    return owner.id === ownershipObj.ownerId
                }).map((ownerObj) => {
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
                        <section key={pet.id} className="animal">
                            <h4 >
                                {pet.animal} and {pet.animal.split(" ")[0]}'s owners:
                            </h4>
                            {
                                pet.ownerArray.map((owner, index) =>
                                    <div key={index}>
                                        {owner}
                                    </div>
                                )
                            }
                        </section>
                    )
                }
            </section>
        )
    }
}


export default AnimalsToOwners