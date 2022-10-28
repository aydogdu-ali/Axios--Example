import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import {useState} from "react"


const TutorialList = ({ tutorials, getTutorials,toggleTheme} ) => {

  const [editItem, setEditItem] = useState("");
  

  

  // silme simgesine tıklandığında tekiklenecek fonksiyonu tanımladım.
  const deleteTutorial = async (id) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

    try {
      //silinecek veriyi tanımlıyoruz.
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    // veri silme işleminden sonra güncel api isteği sağlamış olurum.
    getTutorials();
  };

  return (

    <div className="container mt-5 w-75">
      <table className="table ">
        <thead className ="text-danger">
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody className ="text-dark bg-light ">
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal" data-bs-target="#edit-modal"
                   className="me-2 text-success "
                   onClick ={()=> setEditItem(item)} 
                  />

                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editItem ={editItem} getTutorials={getTutorials}/>
      </div>
     
  );
};

export default TutorialList;
