import {ScheduleTable} from './components/ScheduleTable/ScheduleTable';
import SthBanner from './bruins_sth_banner.png';
import './App.scss';

function App() {
  return (
    <div className="App">
        <img className="sth-banner" src={SthBanner}>
        </img>
        <div className='text-block'>
            <h1>Boston Bruins Tickets</h1>
            <h3>Directly from a Bruins season ticket holder.</h3>
            <h3>Below box office value. No fees. No BS.</h3>
        </div>
        <div className='text-block text-block--spacer'>
        <div>
            Text ‪<a href='tel‪:+16177024741‬'>(617) 702-4741‬</a> with the games you are interested in purchasing.
        </div>
        <div>
            All payments will be made via PayPal. Ticketmaster SafeTix will be transfered to your Ticketmaster account after payment is recieved.
        </div>
        </div>
        <div className='text-block text-block--spacer'>
            Boston Bruins 2021-2022 Regular Season
        </div>
        <ScheduleTable />
    </div>
  );
}

export default App;
