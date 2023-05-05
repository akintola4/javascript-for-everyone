export default function Star(props) {
  // to get the isFavourite data in the state object i use the already created custom prop called it isFilled 
  let StarIcon = props.isFilled === true ? `../public/star-fill.svg` : `../public/Empty_Star.svg`

  return (
  <img
        src={`../public/${StarIcon}`}
        className="card--favorite"
        alt="favorite"
        // i use the custom prop i creatd in app.jsx called handleCLick 
    onClick={props.handleClick}
      />
  )
}