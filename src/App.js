import './App.css';
import ValuteList from './components/valuteList';

function App() {

  const today = new Date()

  return (
    <section className='container'>
      <h1>
        Курсы валют Центрального Банка РФ на {today.getDate()}.{(today.getMonth() < 10 ? "0": "") + (today.getMonth() + 1)}.{today.getFullYear()}
      </h1>
      <ValuteList/>
    </section>
  );
}

export default App;
