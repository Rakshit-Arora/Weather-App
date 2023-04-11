const request = require('request')

const foreCast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2521d732654d3b7f15d6483282711848&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({url, json: true}, (error, { body }) => {
        if(error)
        {
            callback('Unable to connect to Network, try again!!', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find the location, try again!!', undefined)
        }
        else
        {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out but it feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = foreCast