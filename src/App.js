import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './components/ui/spinner/spinner';
import ValuteList from './components/valuteList';

import getExchangeRate from './servises/cbrAPI';

function App() {

  const today = new Date()
  const [valute, setValute] = useState({})
  const [valueHistory, setValuteHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getExchangeRateHistory();
  }, [])


  async function getExchangeRateHistory() {
    setIsLoading(true)
    let arr = [];
    const values = await getExchangeRate();
    setValute(values);
    arr.push(values);    
    for (let i = 1; i < 10; i++) {
      let result = await getExchangeRate(arr[i-1].PreviousURL);    
      arr.push(result)
    }
    setValuteHistory(arr)
    setIsLoading(false)
  }

  return (
    <section className='container'>
      <h1>Курсы валют Центрального Банка РФ на {today.getDate()}.{(today.getMonth() < 10 ? "0": "") + (today.getMonth() + 1)}.{today.getFullYear()}</h1>

      { isLoading 
            ? <Spinner/>
            : <ValuteList 
              valuteList={valute.Valute}
              valueHistory={valueHistory}
              />
        }
      


    </section>
  );
}

export default App;
