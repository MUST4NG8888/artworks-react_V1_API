import { useEffect, useState } from "react";
import "./App.css";
import getData from "./utility/getData";
import Gallery from "./components/Gallery.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const init = async () => {
      setData(await getData());
    };
    init();
  }, []);

  return <>{data && <Gallery data={data} />}</>;
}

export default App;
