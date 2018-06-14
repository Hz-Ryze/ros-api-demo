import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

export class Profile extends Component {


    callback = (key) => {
        console.log(key);
    }


    render() {

        const text = `
 https://zh.wikipedia.org/wiki/%E6%A9%9F%E5%99%A8%E4%BA%BA%E4%BD%9C%E6%A5%AD%E7%B3%BB%E7%B5%B1
`;

        return (
            <Collapse onChange={this.callback}>
                <Panel header="This is panel header 1" key="1">
                    <a>{text}</a>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <a>{text}</a>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        );
    }
}