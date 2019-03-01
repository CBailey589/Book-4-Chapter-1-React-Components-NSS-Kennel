import Settings from "../Settings"

const EmployeeManager = {
    get(id) {
        return fetch(`${Settings.url}/employeesFromAPI/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.url}/employeesFromAPI`)
            .then(r => r.json())
    }
}


export default EmployeeManager