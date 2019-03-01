import APIManager from "../utilities/APIManager"

const LocationManager = Object.create(APIManager, {
    array: {
        value: "locationsFromAPI"
    }
})

export default LocationManager