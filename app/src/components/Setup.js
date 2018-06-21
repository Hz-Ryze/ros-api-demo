import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

export class Setup extends Component {


    callback = (key) => {
        console.log(key);
    }


    render() {

        const text = `
安装
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