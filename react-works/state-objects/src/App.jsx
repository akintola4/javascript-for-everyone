import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contact, setContact] = useState({
    firstName: "Tope",
    lastName: "Akintola",
    phone: "+2348060461839",
    email: "foster@gmail.com",
    isFavorite: false
  })
  //here i use a tenray operator to enable me change the star image 
  let StarIcon = contact.isFavorite === true ? `../public/star-fill.svg` : `../public/Empty_Star.svg`
  function toggleFavorite() {
    setContact(prevContact => {
      return {
        //we need to copy the formal obejct why you may ask the reason is because whenever we change the isFavourite in the object it automatically 
        //write over the previous object 
     ...prevContact,
     //then we need to change the isfavourite to be able to flip anytime we click it 
     //so in english this means do the oppsite of the value in isfavourite any time we click it 
     isFavorite: !prevContact.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img src="./public/avatar.svg" className="card--image" />
        <div className="card--info">
          <img
            src={`../public/${StarIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          {/* in order to access the date in the object we are going to use dot notation to do that said task 
                and we are going to call the object nambed contact then the name of the data we need
                */}
          <h2 className="card--name">
            {contact.firstName + contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}

export default App
