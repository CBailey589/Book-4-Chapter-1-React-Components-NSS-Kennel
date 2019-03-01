import APIManager from "../utilities/APIManager"

const AnimalManager = {
    GET(id) {
        return APIManager.GET("animalsFromAPI", id)
    },
    GETALL() {
        return APIManager.GETALL("animalsFromAPI")
    }
}


export default AnimalManager