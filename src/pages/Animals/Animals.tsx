import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../../components/Animal/Animal";
import "./Animals.scss";

export const Animals = () => {
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);

  useEffect(() => {
    let listFromLocalStorage: IAnimal[] = JSON.parse(
      localStorage.getItem("storedList") || "[]"
    );

    if (listFromLocalStorage.length > 0) {
      setAnimalList(listFromLocalStorage);
    } else {
      const getAnimals = async () => {
        try {
          const animalsData = await axios.get<IAnimal[]>(
            "https://animals.azurewebsites.net/api/animals"
          );

          console.log(animalsData.data);
          setAnimalList(animalsData.data);
          console.log("AnimalList:", animalsData);
          localStorage.setItem("storedList", JSON.stringify(animalsData.data));
        } catch (error) {
          console.error(error);
          return [];
        }
      };
      getAnimals();
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
