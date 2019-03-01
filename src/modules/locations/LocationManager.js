import Settings from "../Settings"

const LocationManager = {
    get(id) {
        return fetch(`${Settings.url}/locationsFromAPI/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.url}/locationsFromAPI`)
            .then(r => r.json())
    }
}


export default LocationManager