import { useState, useEffect } from "react";
import { items } from "./data";

const Filter = () => {
  let filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [array, setArray] = useState([]);
  const [storeItem, setStoreItem] = useState(items);
  useEffect(() => {
    mainProcess();
  }, [array]);

  const mainProcess = () => {
    if (array.length > 0) {
      let filterData = array.map((data) => {
        return items.filter((item) => item.category === data);
      });
      let storeData = filterData.flat();
      console.log(filterData);
      console.log(storeData);
      setStoreItem(storeData);
    } else {
      setStoreItem([...items]);
    }
  };

  console.log("array is ", array);
  console.log("storeItem is ", storeItem);

  const clickHandler = (para) => {
    if (array.includes(para)) {
      const data = array.filter((ele) => ele !== para);
      setArray(data);
    } else {
      setArray([...array, para]);
    }
  };

  return (
    <div>
      <h1 className="buttons-container">Filter App</h1>
      <div className="buttons-container">
        {filters.map((item, index) => (
          <button
            key={index}
            onClick={() => clickHandler(item)}
            className={`button ${array?.includes(item) ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="items-container">
        {storeItem.map((item, index) => (
          <div key={index} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
