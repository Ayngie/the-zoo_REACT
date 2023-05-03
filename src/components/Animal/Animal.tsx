import "./Animal.scss";
import { IAnimalFullDescription } from "../../models/IAnimalFullDescription";
import { Link } from "react-router-dom";
import { MouseEvent, useState } from "react";
import * as luxon from "luxon";
// import { DateTime } from "luxon";

// const [feedingTime, setFeedingTime] = useState<string>("");

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
  // const [animalIsFed, setAnimalIsFed] = useState(false);
  // setAnimalIsFed(isFed);

  // let currentAnimalName = name;
  // console.log("currentAnimalName, pre-klick:", currentAnimalName);

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
          <p>
            <span className="title-text">Beskrivning: </span>
            <span>{longDescription}</span>
          </p>
          <p>
            <span className="title-text">Född: </span>
            <span>{yearOfBirth}</span>
          </p>
          <p>
            <span className="title-text">Mediciner: </span>
            <span>{medicine}</span>
          </p>
          <p>
            <span className="title-text">Är matad? </span>
            <span
              className={isFed ? "is-fed" : "is-not-fed"}>{`${isFed}`}</span>
          </p>

          <p>
            <span className="title-text">Senast matad: </span>
            <span> {`${lastFed}`}</span>
          </p>
          <button
            onClick={(event: MouseEvent) => {
              feedAnimal(event);
            }}>
            Mata djur
          </button>
        </div>
      </>
    );
  }
};

const feedAnimal = (e: MouseEvent) => {
  console.log("Klick: ", e);
  const now = luxon.DateTime.now().toString();
  console.log("Date & time now: ", now);

  // setFeedingTime(now);
  // console.log("Feeding time was: ", feedingTime);

  // console.log("e.target::", e.target); //fel. Visar knapp...
};

// let todaysDate = new Date();
// console.log("Todays date:", todaysDate);
