import APIManager from "../utilities/APIManager"

const EmployeeManager = Object.create(APIManager, {
    array: {
        value: "employeesFromAPI"
    }
})

export default EmployeeManager