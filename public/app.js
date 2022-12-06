// get user's data
// get user's coordinates
async function getCoords(){
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [position.coords.latitude, position.coords.longtitude]
}


// get user's time
function userTime(){
    const now = new Date()
    return now.getHours()
}

function getMealTime(){
    const currentHour = userTime()
    if (currentHour>20) {
        return 'late-night snack'
    } else if(currentHour>16){
        return 'dinner'
    } else if (currentHour>11) {
        return 'lunch'
    }else{
        return 'nreakfast'
    }
}
const time = getMealTime()
console.log(time)
// helper functions
// check time of day


// build ads
// build ad 1
function buidAd1(){
    const mealTime = getMealTime()
    const message = `We have the best ${mealTime} in town`
    const ad =  document.querySelector('.ad1')
    const pTag = document.createElement('p')
    pTag.innerHTML = message;
    ad.append(pTag)
}
// buidAd1()

// build ad 2
function buildAd2(coords){
    const googleMapsLink = `http://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    const ad = document.querySelector('.ad2')
    const pTag = document.createElement('p')
    pTag.innerHTML = `its time to try our coffee! <spam><a href=${googleMapsLink} target="_blank">we're this close</a></span>`
    ad.append(pTag)
}


// event listeners
// on load, build ads
window.onload = async () => {
    buidAd1()
    const coords = await getCoords()
    buildAd2(coords)
}