import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
      fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
    }

    fetchData()
  }, []);


  return (
    <div className="bg-sky-400">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  )
}