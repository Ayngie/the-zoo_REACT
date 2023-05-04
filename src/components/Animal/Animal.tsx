import "./Animal.scss";
import { IAnimalFullDescription } from "../../models/IAnimalFullDescription";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as luxon from "luxon";
import { IAnimal } from "../../models/IAnimal";

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
  // Kolla om matat djur har blivit hungrigt igen?
  useEffect(() => {
    let timePassed: number = 0;

    //beräkna tid som passerat
    const thisMoment = luxon.DateTime.local();
    const thisMomentFormatted = thisMoment.toFormat("yyyy-MM-dd HH:mm");
    console.log("Comparison: thisMoment(Formatted): ", thisMomentFormatted);
    console.log("Comparison: currentAnimal.lastFed: ", currentAnimal.lastFed);

    //gör beräkning här !!! ???

    if (timePassed > 3) {
      setCurrentAnimal({ ...currentAnimal, isFed: false }); //Uppdatera objektets state (obs! sker de facto först efter alla funktioner häri kört klart!).

      updateListInLS({ ...currentAnimal, isFed: false });
      //Skickar med den uppdaterade state-objektet så vi har tillgång till det för att lägga upp i LS i kommande funktion.
    } else {
      // console.log("Not hungry yet!");
    }
  }, []);

  // Ta startvärden från props o sätta till en variabel i state:
  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>({
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
  });

  // Mata djur
  const feedAnimal = () => {
    const momentFed = luxon.DateTime.local();
    console.log("Moment fed: ", momentFed);

    if (momentFed) {
      const formattedTime = momentFed.toFormat("yyyy-MM-dd HH:mm");
      setCurrentAnimal({
        ...currentAnimal,
        isFed: true,
        lastFed: formattedTime,
      }); //Uppdatera mitt state (obs, updateringen sker de facto först efter alla funktioner häri kört klart!).

      updateListInLS({
        ...currentAnimal,
        isFed: true,
        lastFed: formattedTime,
      }); //Skickar med den uppdaterade state-variabeln (det uppdaterade objektet/djuret), vars state annars ju ej blir helt uppdaterat förrän alla funktioner häri kört klart! Men vi kan skicka med värdet så vi har tillgång till det för att lägga upp i LS i kommande funktion.
    }
  };

  // Uppdatera localStorage
  const updateListInLS = (newAnimal: IAnimal) => {
    // Tagit emot min state-variabel, det uppdaterade objektet/djuret.
    // Nu ska vi hämta listan fr LS, uppdatera ändrade djuret, ladda upp uppdaterade listan i LS:
    const animalListFromLS: IAnimal[] = JSON.parse(
      localStorage.getItem("storedList") || "[]"
    );

    const updatedAnimalList = animalListFromLS.map((animal) =>
      animal.id === newAnimal.id ? { ...newAnimal } : animal
    );

    localStorage.setItem("storedList", JSON.stringify(updatedAnimalList));
  };

  if (fullView === false) {
    return (
      <div className="animal-container">
        <h1>{currentAnimal.name}</h1>
        <img
          src={currentAnimal.imageUrl}
          alt={currentAnimal.latinName}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; //prevents looping
            currentTarget.src =
              "https://angelicareutersward.se/Images/noImage/noImage.jpg";
          }}
        />
        <p>{currentAnimal.shortDescription}</p>
        <p>
          <span className="title-text">Är matad? </span>
          <span className={currentAnimal.isFed ? "is-fed" : "is-not-fed"}>
            {`${currentAnimal.isFed}`}
          </span>
        </p>
        <Link to={currentAnimal.id.toString()}>
          Gå in till {currentAnimal.name}!
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="each-animal">
          <h1>{currentAnimal.name}</h1>
          <img
            src={currentAnimal.imageUrl}
            alt={currentAnimal.latinName}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; //prevents looping
              currentTarget.src =
                "https://angelicareutersward.se/Images/noImage/noImage.jpg";
            }}
          />
          <h2>Djur: {currentAnimal.latinName}</h2>
          <p>
            <span className="title-text">Beskrivning: </span>
            <span>{currentAnimal.longDescription}</span>
          </p>
          <p>
            <span className="title-text">Född: </span>
            <span>{currentAnimal.yearOfBirth}</span>
          </p>
          <p>
            <span className="title-text">Mediciner: </span>
            <span>{currentAnimal.medicine}</span>
          </p>
          <p>
            <span className="title-text">Är matad? </span>
            <span className={currentAnimal.isFed ? "is-fed" : "is-not-fed"}>
              {`${currentAnimal.isFed}`}
            </span>
          </p>

          <p>
            <span className="title-text">Senast matad: </span>
            <span>{`${currentAnimal.lastFed}`}</span>
          </p>
          <button
            className={currentAnimal.isFed ? "no-btn-hover" : "btn-hover"}
            disabled={currentAnimal.isFed}
            onClick={() => {
              feedAnimal();
            }}>
            {currentAnimal.isFed
              ? "Tack! // " + currentAnimal.name
              : "Mata " + currentAnimal.name}
          </button>
        </div>
      </>
    );
  }
};
