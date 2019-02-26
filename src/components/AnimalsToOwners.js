import React, { Component } from 'react'
// import { debug } from 'util';
class AnimalsToOwners extends Component {
    render() {
        // Since I want to list things on the page by pet, starting with the pet array
        let petsWithOwners = this.props.TacoAnimals.map((animal) => {
            // creating a new object that will have an additional array of owners per pet
            let obj = {}
            obj.id = animal.id
            obj.animal = animal.animal
            // filters ownerships array to add the related ownership objects from relational table
            obj.ownerArray = this.props.TacoOwnerships.filter((pairing) => {
                return pairing.animalId === animal.id
            })
                // inserts owner objects from owner array into the pet "ownerArray"
                .map((ownershipObj) => {
                    return this.props.TacoOwners.filter((owner) => {
                        return owner.id === ownershipObj.ownerId
                    })
                        // cuts the owner object down to just the name
                        .map((ownerObj) => {
                            return ownerObj.name
                        })
                })
            return obj
        // the pet "ownerArray" is an array of arrays, this flattens it
        }).map((animalObj) => {
            animalObj.ownerArray = animalObj.ownerArray.flat(2)
            return animalObj
        })

        // creates the html that will be put out to the page
        return (

            <section className="animalsToOwners">
                <h3>Meet our animals and their owners!</h3>
                {/* creates new section per pet */}
                {
                    petsWithOwners.map(pet =>
                        <section key={pet.id} className="animal">
                            {/*Pet title*/}
                            <h4 >
                                {pet.animal} and {pet.animal.split(" ")[0]}'s owners:
                            </h4>
                            {
                                // ownerArrays vary in length, makes a div for all available owners
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