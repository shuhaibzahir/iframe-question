import React from 'react'

const AnimalImage = ({animal}) => {
     
    let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgytvt0PUKkiRxNXvOxx4Y7L2crlV9zZXclJbFV99A_Q&s";
    if(animal === "Dog"){
        image = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    }
    if(animal === "Tiger"){
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgytvt0PUKkiRxNXvOxx4Y7L2crlV9zZXclJbFV99A_Q&s"
    }
    console.log(animal)
  return (
    <image src={image}/>
  )
}

export default AnimalImage