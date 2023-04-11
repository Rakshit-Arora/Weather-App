const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicmFrc2hpdC1hcm9yYSIsImEiOiJjbGcyb21ob3kwMWlrM2VxeTB3OGkxdDVoIn0.erCD_RqTPLH2_Qy65YRfUw&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error)
        {
            callback('Unable to connect to Network', undefined)
        }
        else if(body.features.length === 0)
        {
            callback('Unable to find location, try again!!', undefined)
        }
        else
        {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode