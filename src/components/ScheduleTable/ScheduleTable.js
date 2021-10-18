import React from 'react';
import moment from 'moment';
import './ScheduleTable.scss';

const ScheduleTableRows = ({schedule}) => {
    const rows = [];

    schedule.forEach((game, index) => {
        let date = moment(game.Date, 'MMMM Do, YYYY');

        if (date < moment().add(1,'days')) {
            return;
        }

        rows.push(
            <tr className={`game-row ${game.IsAvailable ? '' : 'game-row--unavailable'}`} key={index}>
                <td className='game-row__date-cell'>
                    <div className='date-cell__date'>
                        {game.Date}
                    </div>
                    <div className='date-cell__day'>
                        {`${game.Day},`}
                    </div>
                    <div className='date-cell__time'>
                        {game.Time}
                    </div>
                </td>
                <td className='game-row__opponent-cell'>
                    <div className='opponent-cell__opponent'>
                        {game.Opponent}
                    </div>
                    <div className='opponent-cell__subtext'>
                        {game.Subtext}
                    </div>
                </td>
                <td className='game-row__price'>
                    {game.IsAvailable ? `$${game.Price * 2}` : '--'}
                </td>
                <td className='game-row__availability'>
                    {game.IsAvailable ? 'Available' : 'Unavailable'}
                </td>
            </tr>
        );
    });

    return rows;
}

const ScheduleTable = ({schedule}) => (
    <div className='schedule-table'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Opponent</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Availability</th>
                </tr>
            </thead>
            <tbody>
                <ScheduleTableRows schedule={schedule} />
            </tbody>
        </table>
    </div>
);

ScheduleTable.propTypes = {};

ScheduleTable.defaultProps = {};

export { ScheduleTable };
