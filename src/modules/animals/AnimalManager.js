import Settings from "../Settings"

const AnimalManager = {
    get(id) {
        return fetch(`${Settings.url}/animalsFromAPI/${id}`)
            .then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.url}/animalsFromAPI`)
            .then(r => r.json())
    }
}


export default AnimalManager