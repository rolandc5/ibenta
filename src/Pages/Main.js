import React, { Component } from 'react';
import './Global.css';

import * as Pages from './index';

export default class Main extends Component {
    render = () => {
        return (
            <div>
                <Pages.Nav/>
                <Pages.Product/>
            </div>
        )
    }
}