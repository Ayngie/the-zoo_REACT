import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async () => {
  try {
    const animalsData = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );

    console.log(animalsData.data);
    console.log("AnimalList:", animalsData);
    localStorage.setItem("storedList", JSON.stringify(animalsData.data));
    return animalsData.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
