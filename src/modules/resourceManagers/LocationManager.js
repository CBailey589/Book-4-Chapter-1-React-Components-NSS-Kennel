import APIManager from "../utilities/APIManager"

const LocationManager = {
    GET(id) {
        return APIManager.GET("locationsFromAPI", id)
    },
    GETALL() {
        return APIManager.GETALL("locationsFromAPI")
    }
}


export default LocationManager