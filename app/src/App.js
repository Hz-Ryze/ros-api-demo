import React, { Component } from 'react';
import { Layout,Menu,Icon } from 'antd';
import {Profile} from './components/Profile'

const {Sider, Content} = Layout;
const { SubMenu } = Menu;


class App extends Component {


    handleClick = (e) => {
        console.log('click ', e.key);

        if(e.key === "profile"){
            this.content = <Profile />;
        }

        this.setState({});
    }

    render() {

        const logo = require("./assert/imgs/Icon-Small.png")


        return (
            <Layout >
                <Sider theme="light">
                    <img alt="example" src={logo} />

                    <Menu
                        mode="inline"
                        onClick={this.handleClick}
                        defaultSelectedKeys={['profile']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" /> ROS 简介</span>}>
                            <Menu.Item key="profile">1. 介绍</Menu.Item>
                            <Menu.Item key="setup">2. 安装</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"
                                 title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content>{this.content }</Content>
            </Layout>
        );
    }
}

export default App;
