import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { api_URL } from '../settings/client-config'

const Main = () => {
    const [lists, setLists] = useState([]);
    const URL = api_URL;
     
    const getData = async () => {
        try {
            const response = await axios.get(URL);
            const data = response.data.pageProps.studySubjects;
            setLists(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      console.log(lists);
    }, [lists]);
  

  return (
    <>
      <section id="subject-lists">
        <div className="wrapper">
          <span><span className='studyText'>study</span> <span>/ subjects</span></span>
          <h1>Study Resources via Subjects</h1>
          <p>Find using our extensive subjects filters and get the most out of it.</p>
          <div className="cardsContainer">
            {lists.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
