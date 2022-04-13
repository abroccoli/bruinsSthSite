import { 
    Schedule2022September,
    Schedule2022October,
    Schedule2022November,
    Schedule2022December,
    Schedule2022January,
    Schedule2022February,
    Schedule2022March,
    Schedule2022April
} from './constants/Schedule2022';
import {ScheduleTable} from './components/ScheduleTable/ScheduleTable';
import './App.scss';
import ReactGA from 'react-ga';

ReactGA.initialize('G-3JXVYLQ5VZ');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
        <div className='text-block'>
            <h1>Boston Bruins Tickets</h1>
            <h3>Directly from a Bruins season ticket holder.</h3>
            <h3>Below box office value. No fees. No BS.</h3>
        </div>
        {/* <div className='text-block text-block--spacer'>
            <div>
                Text ‪<a href="sms:6177024741‬">(617) 702-4741‬</a> or message <a href="https://www.reddit.com/user/brocilator/" target="_blank"  rel="noreferrer">u/brocilator</a> on Reddit with the games you are interested in purchasing.
            </div>
            <div>
                All payments will be made via Venmo/PayPal or Cash App.
            </div>
            <div>
            Ticketmaster SafeTix will be transfered to your Ticketmaster account after payment is recieved.
            </div>
            <div>
                All prices listed are for both seats.
            </div>
            <div>
                Seats will not be sold individually.
            </div>
            <div>
                Check offical Bruins channels for date and time changes.
            </div>
        </div>
        <div className='text-block text-block--spacer'>
            <h3> 
                Section 306, Row 7, Seats 3 &amp; 4
            </h3>
        </div>
        <div className='text-block text-block--spacer'>
            Boston Bruins 2021-2022 Regular Season
        </div>

        <div className='text-block text-block--spacer'>
            March
        </div>
        <ScheduleTable schedule={Schedule2022March}/>

        <div className='text-block text-block--spacer'>
            April
        </div>
        <ScheduleTable schedule={Schedule2022April}/> */}

        <div className='text-block text-block--spacer-large'>
            <h2>See you for the 2022 - 2023 season!</h2>
            <h1>GO BRUINS!!!</h1>
        </div>
    </div>
  );
}

export default App;
