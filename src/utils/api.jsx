const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiUrl = '&appid=9deb1490da7395429f58c27e7cf9746c'

export default {
    get: (place) => {
        return fetch(rootUrl + place + apiUrl)
            .then((response) => {
                return response.json()
            })
    }
}
