import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../../components/Animal/Animal";
import { Link } from "react-router-dom";
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

      {animalList.map((thisAnimal, index) => (
        <div className="animals">
          <Link key={index} to={thisAnimal.id.toString()}>
            <Animal {...thisAnimal} fullView={false}></Animal>
          </Link>
        </div>
      ))}
    </>
  );
};
