import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Component, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default function Dashboard() {
    const data = [
        { x: 'A', y: 12 },
        { x: 'B', y: 19 },
        { x: 'C', y: 3 },
        { x: 'D', y: 5 },
        { x: 'E', y: 2 },
    ];

    return (
        <div className='whole-page'>
            <div className='upper-div'>
                <div className="container1">
                    <div className="box">No. 1</div>
                    <div className="box">No. 2</div>
                    <div className="box">No. 3</div>
                </div>
                <div className="container2">
                    <div className="box">No. 4</div>
                    <div className="box">No. 5</div>
                    <div className="box">No. 6</div>
                </div>
            </div>
            <div className='lower-div'>
                <div className='lower-left'>
                    <h1>Dashboard</h1>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '1' }}>
                            <h2>Bar Chart</h2>
                            <VictoryChart domainPadding={20}>
                                <VictoryAxis />
                                <VictoryAxis dependentAxis />
                                <VictoryBar
                                    data={data}
                                    x="x"
                                    y="y"
                                    style={{ data: { fill: 'rgba(75, 192, 192, 0.2)' } }}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
                <div className='lower right'>
                    <h1>Dashboard</h1>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '1' }}>
                            <h2>Bar Chart</h2>
                            <VictoryChart domainPadding={20}>
                                <VictoryAxis />
                                <VictoryAxis dependentAxis />
                                <VictoryBar
                                    data={data}
                                    x="x"
                                    y="y"
                                    style={{ data: { fill: 'rgba(75, 192, 192, 0.2)' } }}
                                />
                            </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

