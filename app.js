const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')

const address = process.argv[2]

if(!address)
{
    console.log('Please provide a Address!!')
}
else
{
    geoCode(address, (error, {latitude, longitude, location} = {}) => {
        if(error)
        {
            return console.log(error)
        }
    
        foreCast(longitude, latitude, (error, foreCastData) => {
            if(error)
            {
                return console.log(error)
            }
    
            console.log(location)
            console.log(foreCastData)
        })
    })
}
