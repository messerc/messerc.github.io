import React from 'react';
import s from '../styles/app.style.js'
const twitchMineVid = require('file-loader!./twitchminedemo.mp4');
import { Area, AreaChart, LineChart, Line, ResponsiveContainer, XAxis, YAxis, ReferenceLine } from 'recharts';

const areaChartData = [
  {age: 1, hours: 0},
  {age: 2, hours: 1},
  {age: 3, hours: 2},
  {age: 4, hours: 4},
  {age: 5, hours: 6},
  {age: 6, hours: 6.1},
  {age: 7, hours: 6.2},
  {age: 8, hours: 6.3},
  {age: 9, hours: 6.4},
  {age: 10, hours: 6.5},
  {age: 11, hours: 6.4},
  {age: 12, hours: 6.3},
  {age: 13, hours: 6.5},
  {age: 14, hours: 7},
  {age: 15, hours: 7.1},
  {age: 16, hours: 7.4},
  {age: 17, hours: 7.8},
  {age: 18, hours: 8.5},
  {age: 19, hours: 6},
  {age: 20, hours: 6.2},
  {age: 21, hours: 5.5},
  {age: 22, hours: 5.8},
  {age: 23, hours: 6.0},
  {age: 24, hours: 5.8},
  {age: 25, hours: 3},
  {age: 26, hours: 0},
  {age: 27, hours: 0}
]

export default class Charts extends React.Component {

  render() {
    return (
    <div className="route-container">
      <div className="row work-row">
        <div className="col-sm-10 col-sm-offset-1">
          <h4 className="text-muted"><strong>TIME SPENT PLAYING VIDEO GAMES</strong></h4>
          <h6 className="reference-line-label">Moved in with girlfriend</h6>
          <ResponsiveContainer height={300} margin={{ top: 50, right: 10, left: 10, bottom: 5 }}>
            <AreaChart data={areaChartData} dot={false}>
              <Area dataKey="hours" style={{fill: 'rgba(165, 210, 95, 0.7)', stroke: 'none'}}/>
              <XAxis dataKey="age" type="number" tickLine={false} tick={false} />
              <ReferenceLine x={25} style={{stroke: 'green'}}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="row work-row">
        <div className="col-sm-10 col-sm-offset-1">
          <h4 className="text-muted"><strong>PERCENT OF DAY SPENT CONCERNED WITH RECEDING HAIRLINE</strong></h4>
          <h6 className="reference-line-label">Moved in with girlfriend</h6>
          <ResponsiveContainer height={300} margin={{ top: 50, right: 10, left: 10, bottom: 5 }}>
            <AreaChart data={areaChartData} dot={false}>
              <Area dataKey="hours" style={{fill: 'rgba(165, 210, 95, 0.7)', stroke: 'none'}}/>
              <XAxis dataKey="age" type="number" tickLine={false} tick={false} />
              <ReferenceLine x={25} style={{stroke: 'green'}}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
  }
}

