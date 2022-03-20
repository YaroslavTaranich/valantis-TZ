const ValuteHistory = ({charCode, valuteHistory, showHistory}) => {

    const historyElements =  valuteHistory.map(item => {
        
        return(
            <li 
            key={item.Date}
            className="valute-history__line">
                <span className="valute-history__span">
                    {item.Date.slice(0, 10)} 
                </span> 
                <span className="valute-history__span">
                    {/* курс валюты по отношению к 1 рублю */}
                    {(item.Valute[charCode].Value / item.Valute[charCode].Nominal).toFixed(5)}
                </span>
            </li>
        )
    })

    return(
        <ul className={(showHistory ? "" : "hide") + " valute-history"}>
            <p className="valute-history__title">История изменения курса {charCode}</p>
            <li className="valute-history__line">
                <span className="valute-history__span">
                    Дата 
                </span> 
                <span className="valute-history__span">
                    Курс ЦБ
                </span>
            </li>
            {historyElements}
        </ul>
    )
}

export default ValuteHistory;