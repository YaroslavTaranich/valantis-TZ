import axios from "axios";

async function getExchangeRate(url = '//www.cbr-xml-daily.ru/daily_json.js') {  
    try {
        const response = await axios.get('https:' + url);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export default getExchangeRate;