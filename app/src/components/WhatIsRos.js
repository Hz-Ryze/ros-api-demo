import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

export class WhatIsRos extends Component {



    render() {

        let content = require("../../docs/what is ros.md");
            console.log(content);

        return (
            <Collapse onChange={this.callback}>
                <Panel header="This is panel header 1" key="1">
                    <a>{content}</a>
                </Panel>

            </Collapse>
        );
    }
}