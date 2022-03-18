import { useEffect, useState } from 'react';
import './App.css';
import ValuteList from './components/valuteList';

import getExchangeRate from './servises/cbrAPI';

function App() {

  const today = new Date()
  const [valute, setValute] = useState({})
  const [valueHistory, setValuteHistory] = useState([])

  useEffect(() => {
    getValuteValues() 
    getExchangeRateHistory();
  }, [])

  async function getValuteValues() {
    const values = await getExchangeRate();
    setValute(values);
  }

  async function getExchangeRateHistory() {
    let arr = [];
    const res = await getExchangeRate();
    arr.push(res);    
    for (let i = 1; i < 10; i++) {
      let result = await getExchangeRate(arr[i-1].PreviousURL);    
      arr.push(result)
    }
    setValuteHistory(arr)
  }

  return (
    <section className='container'>
      <h1>Курсы валют Центрального Банка РФ на {today.getDate()}.{(today.getMonth() < 10 ? "0": "") + (today.getMonth() + 1)}.{today.getFullYear()}</h1>

      <ValuteList 
      valuteList={valute.Valute}
      valueHistory={valueHistory}
      />

    </section>
  );
}

export default App;
