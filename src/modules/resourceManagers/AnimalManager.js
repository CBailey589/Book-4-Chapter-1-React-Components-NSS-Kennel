import APIManager from "../utilities/APIManager"

const AnimalManager = Object.create(APIManager, {
    array: {
        value: "animalsFromAPI"
    }
})

export default AnimalManager