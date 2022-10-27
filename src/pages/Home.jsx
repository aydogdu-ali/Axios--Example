import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  // Api den gelen veriyi tutacağamız stateyi tanımlıyorum.
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  // fonsiyonk tanımlayarak Api'den veri çekiyorum.
  const getTutorials = async () => {

    try {
      const {data} = await axios(url);
    console.log(data) 
    setTutorials(data)
    } catch (error) {
      console.log(error) 
    }
    
  }

  //DidMount olarak çalışacaktır.
  //ilk render den sonra 1 kez çalışacak
  useEffect(()=>{
    getTutorials()
  },[])

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials= {tutorials} />
    </>
  );
};

export default Home;
