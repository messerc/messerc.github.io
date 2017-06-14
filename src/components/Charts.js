import React from 'react';
import s from '../styles/app.style.js'
const twitchMineVid = require('file-loader!./twitchminedemo.mp4');
import { Area, AreaChart, Bar, BarChart, LineChart, Line, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, ReferenceLine, Cell, Label } from 'recharts';

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
  {age: 27, hours: 0},
  {age: 28, hours: 0},
  {age: 29, hours: 0},
  {age: 30, hours: 0},
  {age: 31, hours: 0}
]

const pieDataNormal = [
  {feel: 'concerned', value: .10},
  {day: 'not concerned', value: .9}
]

const pieDataWindy = [
  {day: 'concerned', value: .99},
  {day: 'not concerned', value: .01}
]

const barChartData = [
  {skill: 'HTML', value: 1},
  {skill: 'CSS / SASS', value: 1},
  {skill: 'Javascript (ES6)', value: 1},
  {skill: 'React', value: 1},
  {skill: 'Redux', value: 1},
  {skill: 'D3 / Data Viz', value: 1},
  {skill: 'Git', value: 1},
  {skill: 'Researching places to eat', value: 25}
]

const Colors = ['rgba(165, 210, 95, 0.9)', 'rgb(225, 225, 225)']

export default class Charts extends React.Component {

  render() {
    return (
    <div className="route-container">
        <div className="row work-row">
          <div className="col-sm-10 col-sm-offset-1">
            <h4 className="text-muted" style={{textAlign: 'center'}}><strong>SKILL SET</strong></h4>
            <ResponsiveContainer height={375} margin={{ top: 50, right: 10, left: 50, bottom: 5 }}>
              <BarChart data={barChartData} layout="vertical" margin={{ top: 10, right: 10, left: 20, bottom: 5 }}>
                <Bar dataKey="value" style={{fill: 'rgba(165, 210, 95, 0.9)', stroke: 'none'}}/>
                <YAxis dataKey="skill" type="category" tickLine={false} width={120} />
                <XAxis dataKey="value" type="number" tickLine={false} tick={false} axisLine={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="row work-row">
          <div className="col-sm-10 col-sm-offset-1">
            <h4 className="text-muted" style={{textAlign: 'center'}}><strong>PERCENT OF DAY SPENT CONCERNED WITH RECEDING HAIRLINE</strong></h4>
            <div className="col-xs-6 pie-container">
            <h4 style={{textAlign: 'center'}}>On a normal day</h4>
            <ResponsiveContainer height={200}>
              <PieChart>
                <Pie data={pieDataNormal}
                  style={{stroke: 'none'}}
                  nameKey="feel"
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  fill='rgba(165, 210, 95, 0.7)'>
                  {pieDataNormal.map((entry, index) => <Cell key={index} fill={Colors[index % Colors.length]} />)}
                  <Label position="center" style={{fontSize: '16px', color: 'white'}}>10%</Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            </div>
            <div className="col-xs-6 pie-container">
            <h4 style={{textAlign: 'center'}}>On a windy day</h4>
            <ResponsiveContainer height={200}>
              <PieChart>
                <Pie data={pieDataWindy}
                  style={{stroke: 'none'}}
                  nameKey="feel"
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={80}
                  fill='rgba(165, 210, 95, 0.7)'>
                  {pieDataWindy.map((entry, index) => <Cell key={index} fill={Colors[index % Colors.length]} />)}
                  <Label position="center">99%</Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            </div>
          </div>
        </div>
         <div className="row work-row">
          <div className="col-sm-10 col-sm-offset-1">
            <h4 className="text-muted" style={{textAlign: 'center'}}><strong>TIME SPENT PLAYING VIDEO GAMES THROUGHOUT LIFE</strong></h4>
            <h6 className="reference-line-label">Moved in with girlfriend</h6>
            <ResponsiveContainer height={300} margin={{ top: 50, right: 10, left: 10, bottom: 5 }}>
              <AreaChart data={areaChartData} dot={false}>
                <Area dataKey="hours" style={{fill: 'rgba(165, 210, 95, 0.7)', stroke: 'none'}}/>
                <XAxis dataKey="age" type="number" tickLine={false} tick={false} style={{stroke: 'rgb(205, 205, 205)'}}/>
                <ReferenceLine x={25} style={{stroke: 'rgb(155, 155, 155)'}}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
    </div>
  )
  }
}

