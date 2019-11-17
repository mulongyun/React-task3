import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar  
                    style={{backgroundColor:'#3fcccb',height:'60px',position:'sticky ',top:'0'}}
                    leftContent="Back"
                >我的</NavBar> 
            </div>
        )
    }
}