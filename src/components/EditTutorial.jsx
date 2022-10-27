import { useEffect, useState } from "react"
import axios from "axios";

const EditTutorial = ({getTutorials,editItem}) => {
  console.log(editItem);
  const { id, title: newTitle, description: newDescription } = editItem;

  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  // componentDidUpdate
  // newTitle veya description her degistiginde local title ve  description state'lerimizi gunceliyoruz.
  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newTitle, newDescription]);

  //! Update (PUT:Whole Update)
  const editTutorial = async (id, tutorials) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, tutorials);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorial(id, { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      {/* Modal */}
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Tutorial
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
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
                    value={title || ""}
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
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
