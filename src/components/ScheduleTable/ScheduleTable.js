import React from 'react';
import './ScheduleTable.scss';

const ScheduleTableRows = ({schedule}) => {
    const rows = [];

    schedule.forEach(game => {
        rows.push(
            <tr className={`game-row ${game.IsAvailable ? '' : 'game-row--unavailable'}`}>
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
        <table class='table table-dark'>
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
