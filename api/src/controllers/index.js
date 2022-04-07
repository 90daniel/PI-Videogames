const { default: axios } = require('axios');
const {Videogame, Genre} = require('../db.js')

//Get 100 videogames from API
const infoApi = async() => {
    let url = `https://api.rawg.io/api/games?key=f9ee51ed795746a1970f93399a92c096`
    let videogames = []
    try {
        for(let i=0; i<5; i++) {    //5 times because it's an array of 20 videogames and we need 100
            const result = await axios.get(url)     //request to API. This has a .data property with an array of videogames and a .next property with the next page
            result.data.results.map(e => {      //map videogames from array of videogames
                videogames.push({            //push videogames in videogames array
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    rating: e.rating,
                    platforms: e.platforms?.map(el => el.platform.name),
                    genres: e.genres?.map(el => el.name)
                })
            })
            //this is the next page of the API to get the next 20 videogames
            url = result.data.next
        }
        return videogames
    } catch(e) {
        console.log(e)
    }
};

//Get videogames from DB
const infoDB = async () => {
    try {
        return await Videogame.findAll({    //SELECT * FROM Videogame
            include: [{
                model: Genre,
                atributes: ['name'],
                throught: {
                    attributes: []
                }
            }]
        })
    } catch(e) {
        console.error(e)
    }
}

//Get videogames from API and DB
const infoTotal = async () => {
    //to join the two requests, save the execution of the functions
    const apiData = await infoApi ();
    const dbData = await infoDB();
    //now join the two arrays
    const infoCompleta = dbData.concat(apiData)
    return infoCompleta
}