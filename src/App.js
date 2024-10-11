import { 
    Schedule2024November,
    Schedule2024December
} from './constants/Schedule2024';
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
        <div className='text-block text-block--spacer'>
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
                Section 305, Row 6, Seats 7 &amp; 8
            </h3>
        </div>
        <div className='text-block text-block--spacer'>
            Boston Bruins 2024-2025 Regular Season
        </div>

        <div className='text-block text-block--spacer'>
            November
        </div>
        <ScheduleTable schedule={Schedule2024November}/>

        <div className='text-block text-block--spacer'>
            December
        </div>
        <ScheduleTable schedule={Schedule2024December}/>

        {/* <div className='text-block text-block--spacer-large'>
            No tickets currently available.
        </div> */}
    </div>
  );
}

export default App;
