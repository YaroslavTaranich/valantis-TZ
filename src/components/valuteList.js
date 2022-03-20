import { useEffect, useState } from 'react';
import getExchangeRate from '../servises/cbrAPI';
import Spinner from './ui/spinner/spinner';
import ValuteListItem from "./valuteItem";

const ValuteList = () => {

    const [valute, setValute] = useState({})
    const [valuteHistory, setValuteHistory] = useState([])
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

    function renderListElems(valutes) {
        let list = [];
        if (valutes) {    
            for (const key in valutes) {
                if (Object.hasOwnProperty.call(valutes, key)) {
                    const element = valutes[key];
                    list.push(<ValuteListItem 
                                key={element.ID} 
                                valute={element} 
                                valuteHistory={valuteHistory}/>)
                }
            }
        }
        return list;
    }

    return(
        <ul className="valute-list">
            <li className="valute-list__line">
                <span className="valute-list__line--span valute-list__line--name">Валюта</span> 
                <span className="valute-list__line--span valute-list__line--value">Курс ЦБ</span> 
                <span className="valute-list__line--span valute-list__line--changing">Динамика</span>
            </li>
            { 
            isLoading 
                    ? <Spinner/>
                    : renderListElems(valute.Valute)
            }
            
        </ul>

    )
}

export default ValuteList;