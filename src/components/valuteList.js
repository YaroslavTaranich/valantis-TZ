import ValuteListItem from "./valuteItem";

const ValuteList = ({valuteList, valueHistory}) => {
    
    let list = [];

    for (const key in valuteList) {
        if (Object.hasOwnProperty.call(valuteList, key)) {
            const element = valuteList[key];
            list.push(<ValuteListItem 
                        key={element.ID} 
                        valute={element} 
                        valueHistory={valueHistory}/>)
        }
    }

    return(
        <ul className="valute-list">
            <li className="valute-list__line">
                <span className="valute-list__line--span valute-list__line--name">Валюта</span> 
                <span className="valute-list__line--span"> Единиц </span>  
                <span className="valute-list__line--span valute-list__line--value">Курс ЦБ</span> 
                <span className="valute-list__line--span valute-list__line--changing">Динамика</span>
            </li>

            {list}
        </ul>

    )
}

export default ValuteList;