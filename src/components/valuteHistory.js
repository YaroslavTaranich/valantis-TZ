const ValuteHistory = ({charCode, valueHistory, showHistory}) => {

    const historyElements =  valueHistory.map(item => {
        
        return(
            <li 
            key={item.Date}
            className="vlaute-history__line">
            <span className="vlaute-history__span">
                 {item.Date.slice(0, 10)} 
            </span> 
            <span className="vlaute-history__span">
                {item.Valute[charCode].Value}
            </span>
            </li>

        )
    })

    return(
        <ul className={(showHistory ? "" : "hide") + " vlaute-history"}>
            <p className="vlaute-history__title">История изменения курса {charCode}</p>
            <li className="vlaute-history__line">
            <span className="vlaute-history__span">
                 Дата 
            </span> 
            <span className="vlaute-history__span">
                Курс ЦБ
            </span>
            </li>
            {historyElements}
        </ul>
    )
}

export default ValuteHistory;