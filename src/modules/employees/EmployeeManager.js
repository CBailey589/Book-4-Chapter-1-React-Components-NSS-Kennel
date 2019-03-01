import APIManager from "../utilities/APIManager"

const EmployeeManager = {
    GET(id) {
        return APIManager.GET("employeesFromAPI", id)
    },
    GETALL() {
        return APIManager.GETALL("employeesFromAPI")
    },
    DELETE(id) {
        return APIManager.DELETE("employeesFromAPI", id)
    }
}


export default EmployeeManager