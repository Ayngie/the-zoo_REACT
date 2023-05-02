import { IAnimalFullDescription } from "../../models/IAnimal";
import "./Animal.scss";

export const Animal = ({
  name,
  latinName,
  yearOfBirth,
  shortDescription,
  longDescription,
  imageUrl,
  medicine,
  isFed,
  lastFed,
  fullView,
}: IAnimalFullDescription) => {
  if (fullView === false) {
    return (
      <div className="animal-container">
        <h1>{name}</h1>
        <img src={imageUrl} alt={shortDescription} />
        <p>{shortDescription}</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="animal-container">
          <h1>{name}</h1>
          <img src={imageUrl} alt={shortDescription} />
          <h2>Djur: {latinName}</h2>
          <p>Beskrivning: {longDescription}</p>
          <p>Född: {yearOfBirth}</p>
          <p>Mediciner: {medicine}</p>
          {/* <p>Är matad? {`${isFed}`}</p> */}
          <p>Senast matad: {`${lastFed}`}</p>
        </div>
        <button>Mata mig!</button>
      </>
    );
  }
};
