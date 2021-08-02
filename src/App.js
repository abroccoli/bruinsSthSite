import {ScheduleTable} from './components/ScheduleTable/ScheduleTable';
import './App.scss';

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
                Text ‪<a href="sms:6177024741‬">(617) 702-4741‬</a> with the games you are interested in purchasing.
            </div>
            <div>
                All payments will be made via PayPal.
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
        </div>
        <div className='text-block text-block--spacer'>
            <h3> 
                Section 306, Row 7, Seats 3 &amp; 4
            </h3>
        </div>
        <div className='text-block text-block--spacer'>
            Boston Bruins 2021-2022 Regular Season
        </div>
        <ScheduleTable />
    </div>
  );
}

export default App;
