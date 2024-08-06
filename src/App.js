import './firebaseConfig';
import './App.scss';
import React, { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);
  
  const db = getFirestore();

  
  const fetchData = async () => {
    const qs = await getDocs(collection(db, 'stuff'));
    const res = [];
    qs.forEach((doc) => {
      res.push(doc.data());
    });
    if (res.length) {
      setData(res);
      console.log('data', data);
    };
  };
  useEffect(() => {
    fetchData();    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          DAVA SCHOOL
        </p>
        <p>
          {process.env.DS_API_KEY}
        </p>
      </header>
      <button className='btn' onClick={fetchData}>data</button>

      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - {item.amount} - {item.price} - {item.required ? 'r' : 'n'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
