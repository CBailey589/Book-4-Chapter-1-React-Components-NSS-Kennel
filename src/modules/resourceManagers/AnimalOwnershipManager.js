import APIManager from "../utilities/APIManager"

const AnimalOwnershipManager = {
    GET(id) {
        return APIManager.GET("ownershipsFromAPI", id)
    },
    GETALL() {
        return APIManager.GETALL("ownershipsFromAPI")
    }
}


export default AnimalOwnershipManager