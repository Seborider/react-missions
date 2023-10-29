import React, { useEffect, useState } from "react";
import {
  fetchItems,
  IListItem,
} from "../../services/items-api/items-api-service";
import "./items-list.css";

interface ItemsListProps {
  count: number;
  onIncrement: () => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ count, onIncrement }) => {
  const [items, setItems] = useState<IListItem[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMessage(`${count} Times clicked`);
  }, [count]);

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  return (
    <div className="page-container">
      <div className="items-container">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.label} with ID: {item.id}
            </li>
          ))}
        </ul>
      </div>
      <div className="button-message-container">
        <button onClick={onIncrement} aria-label="Increment counter">
          Click here
        </button>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default ItemsList;
