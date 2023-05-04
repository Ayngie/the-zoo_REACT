import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../../components/Animal/Animal";
import "./AnimalList.scss";
import { getAnimals } from "../../services/getAnimals";

export const Animals = () => {
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);

  useEffect(() => {
    const animalListFromLS: IAnimal[] = JSON.parse(
      localStorage.getItem("storedList") || "[]"
    );
    if (animalListFromLS.length > 0) {
      setAnimalList(animalListFromLS);
    } else {
      getAnimals().then((animalsData) => {
        setAnimalList(animalsData);
      });
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1>Här är våra djur!</h1>

      <div className="all-animals">
        {animalList.map((thisAnimal, index) => (
          <Animal {...thisAnimal} fullView={false} key={index}></Animal>
        ))}
      </div>
    </>
  );
};
