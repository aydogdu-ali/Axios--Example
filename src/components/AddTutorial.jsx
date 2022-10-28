import { useState } from "react";
import axios from "axios";
import { BsCheckCircle } from "react-icons/bs";

const AddTutorial = ({ getTutorials }) => {
  // inputların stateleri
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // form daki verileri göndermek için obje oluşturuyorum.
  const handleSubmit = (e) => {
    e.preventDefault();
    // obje kısmı
    const newTutorial = { title: title, description: description };
    // oluşturulan objenin database gönderilmesini sağladım
    sentaddTutorial(newTutorial);
    // veri gönderildikten sonra input içlerini boşalltım.
    setTitle("");
    setDescription("");
    
  };

  // POST işlemi
  // oluşturalan objeyi fonksiyona parametre olarak gönderdik
  const sentaddTutorial = async (newTutorial) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.post(url, newTutorial);
    } catch (error) {
      console.log(error);
    }
    // her veri gönderme işinden sonra Api deki bilgiler yeniden çekilir.
    getTutorials();
  };

  return (
    <div className="container text-center mt-4 w-75">
      <h1 className="display-6 text-danger fw-bolder">Add Your Work</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
   
         <BsCheckCircle size={40}
                    type="button"
                    className="text-success bg-warning rounded-circle" 
                    onClick ={handleSubmit}/>
       
      </form>
    </div>
  );
};

export default AddTutorial;
