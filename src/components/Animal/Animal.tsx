import { Link } from "react-router-dom";
import { IAnimalFullDescription } from "../../models/IAnimal";
import "./Animal.scss";
import { MouseEvent, useState } from "react";

export const Animal = ({
  id,
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
        <img
          src={imageUrl}
          alt={latinName}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; //prevents looping
            currentTarget.src =
              "https://angelicareutersward.se/Images/noImage/noImage.jpg";
          }}
        />
        <p>{shortDescription}</p>
        <Link to={id.toString()}>Läs mer!</Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="each-animal">
          <h1>{name}</h1>
          <img
            src={imageUrl}
            alt={latinName}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; //prevents looping
              currentTarget.src =
                "https://angelicareutersward.se/Images/noImage/noImage.jpg";
            }}
          />
          <h2>Djur: {latinName}</h2>
          <p>Beskrivning: {longDescription}</p>
          <p>Född: {yearOfBirth}</p>
          <p>Mediciner: {medicine}</p>
          <p>Är matad? {`${isFed}`}</p>
          <p>Senast matad: {`${lastFed}`}</p>
        </div>
        {/* <button onClick={(e) => {feedAnimal(e)}}>Mata djur</button> */}
      </>
    );
  }
};

// const feedAnimal (e: MouseEvent) {
//   console.log(e);
// }

// let todaysDate = new Date();
// console.log("Todays date:", todaysDate);

// const [feedingTime, setFeedingTime] = useState<Date>();
