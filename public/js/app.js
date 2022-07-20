console.log("Client side js File!!!!")



const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = searchElement.value

    messageOne.textContent = "Loading...."
    messageTwo.textContent = " "

    fetch('http://127.0.0.1:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error){
            messageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location,
            messageTwo.textContent = data.forecast
        }
    })
})
})







/*  Personal playground data*/

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

//     response.json().then((data)=>{
//         console.log(data)
//     })

// })

// fetch('http://127.0.0.1:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error){
//             console.log(data.error)
//         } else{
//         console.log(data.location)
//         console.log(data.forecast)
//         }
//     })
// })