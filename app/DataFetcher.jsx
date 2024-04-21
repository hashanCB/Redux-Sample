// app/components/DataFetcher.client.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./dataSlice"; // Adjust the import path as needed

export default function DataFetcher() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error fetching data.</div>;

  return (
    <div>
      <h1>Data Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li> // Adjust according to your data's structure
        ))}
      </ul>
    </div>
  );
}
