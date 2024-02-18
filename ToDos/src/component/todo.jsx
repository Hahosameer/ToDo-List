import { useState } from "react";

export const Todo = () => {
  // states()
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, settoggle] = useState(true);
  const [isEidtItem, setisEidtItem] = useState(null);

  // ADD ITEM HANDLER
  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggle) {
      setItem(
        item.map((elem) => {
          if (elem.id === isEidtItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      settoggle(true);
      setInputData("");
      setisEidtItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, allInputData]);
      setInputData("");
    }
  };


  // DELETE HANDLER
  const deleteItem = (id) => {
    const updatedItem = item.filter((elem) => {
      return elem.id !== id;
    });
    setItem(updatedItem);
  };

  // EDIT HANDLER
  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);
    settoggle(false);
    setInputData(newEditItem.name);
    setisEidtItem(id);
  };


  // REMOCE ALL HANDLER
  const removeAll = () => {
    setItem([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="https://media.istockphoto.com/id/1847244089/photo/2024-goals-written-on-notebook-on-office-desk-table-business-concept.webp?b=1&s=170667a&w=0&k=20&c=DcqOxPoRYjN9bWcpdHRTiW_TY6cR650U4DG4A4zPLL8="></img>
          </figure>
          <div className="addItem">
            <input
              type="text"
              title="Pleas Enter You Task"
              placeholder="Add Item..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggle ? (
              <button id="addbtn"
              title="Add Todo"
                className="btn bg-dark text-white"
                onClick={addItem}
                type="submit"
              >
                Add Todo
              </button>
            ) : (
              <button
                className="btn bg-dark text-white"
                onClick={addItem}
                type="submit"
              >
                Edit Todo
              </button>
            )}
          </div>
          <div className="showItem">
            {[...item].reverse().map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h4 id="element">{elem.name}</h4>
                  <div>
                    <i
                      className="ri-edit-2-line edit"
                      title="Edit Item.."
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="ri-delete-bin-5-line delete"
                      title="Delete Item.."
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItem">
            <button className="removeAll" title="Remove All" onClick={removeAll}>
              <span>Remove All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
