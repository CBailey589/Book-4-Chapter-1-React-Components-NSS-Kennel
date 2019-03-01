import Settings from "../Settings"

const OwnerManager = {
    get(id) {
        return fetch(`${Settings.url}/ownersFromAPI/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.url}/ownersFromAPI`)
            .then(r => r.json())
    }
}


export default OwnerManager