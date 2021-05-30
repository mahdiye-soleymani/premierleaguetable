import axios from 'axios';
const Url = 'https://api.football-data.org/v2/competitions/2021/matches';

export const fetchData = async () => {
 
    try { 
        const response = await axios.get(Url);
        return response;    
    }
          catch (error){

          }
}

