import "../App.css";
import React, { Component } from "react";
import { Layout ,Menu } from "antd";
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined
  
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export class Boiler extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
    });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <>
        <Layout
        style={{
          minHeight: '100vh',
        }} className="site-layout" >
            <Header className="site-layout-background"
            style={{
              padding: 0,
            }}>
            <Avatar size="large" style={{float:"right",margin:"0.5rem"}} icon={<UserOutlined />} />
            <Title style={{color:"white",margin:"1rem"}} level={4}>Mobio</Title>
            </Header>
            <Layout>
          
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
          <Layout>
            
           <Content  style={{
              margin: '0 16px',
            }}>

             <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
             Dashboard
            </div>
            </Content>
            <Footer style={{
              textAlign: 'center',
            }}>Footer</Footer>
            </Layout>
           

            </Layout>
          </Layout>
        
      </>
    );
  }
}

export default Boiler;
