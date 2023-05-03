import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal/Animal";

function AnimalView() {
  const params = useParams(); // { id: 123 }

  const animalList: IAnimal[] = JSON.parse(
    localStorage.getItem("storedList") || "[]"
  );
  // console.log("AnimalList in AnimalView:", animalList);

  const currentAnimal = animalList.find(
    (animal) => animal.id.toString() === params.id
  );

  if (currentAnimal === undefined) {
    return <h2>Oops, välj ett djur!</h2>;
  } else
    return (
      <>
        <Navbar></Navbar>
        <p>Du klickade på:</p>
        <Animal {...currentAnimal} fullView={true}></Animal>
      </>
    );
}

export default AnimalView;
