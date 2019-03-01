import Settings from "../Settings"

const AnimalOwnershipManager = {
    get(id) {
        return fetch(`${Settings.url}/ownershipsFromAPI/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.url}/ownershipsFromAPI`)
            .then(r => r.json())
    }
}


export default AnimalOwnershipManager