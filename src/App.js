import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [randomUserDataJson, setRandomUserDataJson] = useState("");

  const fetchRandomData = async () => {
    return axios
      .get("https://randomuser.me/api")
      .then(function ({ data }) {
        return JSON.stringify(data, null, 2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJson(randomData);
    });
  }, []);

  return (
    <div>
      <pre>{randomUserDataJson}</pre>
    </div>
  );
};

export default App;
