import ValuteHistory from "./valuteHistory";
import { useState } from "react";

const ValuteListItem = ({valute, valueHistory}) => {

    const [showHistory, setShowHistory] = useState(false)

    const changingProcent = ((valute.Value - valute.Previous) * 100 / valute.Value).toFixed(3);

    return(
        <>
            <li 
            className="valute-list__line"
            onClick={() => setShowHistory(!showHistory)}
            >
                <span className="valute-list__line--span">{valute.CharCode}</span>
                <span className="valute-list__line--span"> {valute.Nominal} </span>  
                <span className="valute-list__line--span"> {valute.Value} </span> 
                <span 
                className={(changingProcent > 0 ? " positive" : " negative") + " valute-list__line--span valute-list__line--changing " }> 
                {changingProcent} %
                </span>
                <div className="valute-list__line--tooltip">{valute.Name}</div>
            </li>
            <ValuteHistory 
                valueHistory={valueHistory} 
                charCode={valute.CharCode} 
                showHistory={showHistory}
            />
        </>

    )
}

export default ValuteListItem;