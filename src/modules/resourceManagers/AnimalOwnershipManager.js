import APIManager from "../utilities/APIManager"

const AnimalOwnershipManager = Object.create(APIManager, {
    array: {
        value: "ownershipsFromAPI"
    }
})

export default AnimalOwnershipManager