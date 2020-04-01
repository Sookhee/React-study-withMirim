import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () =>{
    try{
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=c6e1f1772e1b4036ab8c212686e2ec4a',
      );
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
};

export default App;