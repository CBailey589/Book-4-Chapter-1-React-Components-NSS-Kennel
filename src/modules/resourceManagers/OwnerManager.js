import APIManager from "../utilities/APIManager"

const OwnerManager = {
    GET(id) {
        return APIManager.GET("ownersFromAPI", id)
    },
    GETALL() {
        return APIManager.GETALL("ownersFromAPI")
    },
    DELETE(id) {
        return APIManager.DELETE("ownersFromAPI", id)
    }
}


export default OwnerManager