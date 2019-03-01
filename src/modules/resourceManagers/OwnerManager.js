import APIManager from "../utilities/APIManager"

const OwnerManager = Object.create(APIManager, {
    array: {
        value: "ownersFromAPI"
    }
})

export default OwnerManager