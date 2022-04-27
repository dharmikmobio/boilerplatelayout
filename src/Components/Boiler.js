import React, { Component } from 'react'
import '../App.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

export class Boiler extends Component {
// comment 
  render() {

    return (
      <>
         <Layout>
      <Header style={{padding:10}}>
      
      <Avatar size="large" style={{float:"right",cursor:"pointer"}} icon={<UserOutlined />} />
      <Title style={{color:'white'}} level={3}>MOBIO</Title>
      </Header>
        <Layout>
        <Sider>
          <Menu
          defaultSelectedKeys={['Dashboard']}
          mode="inline"
          >
          
            <Menu.Item key='Dashboard'>
              Dashboard <Link to="/"/>
            </Menu.Item>
            <SubMenu
            title={
              <span>
              
                <span>About US</span>
              </span>
            }
            >
              <Menu.ItemGroup key='Features' title='React 18 new Features'>
                <Menu.Item key='location1'><Link to="/test">Test</Link></Menu.Item>
                <Menu.Item key='location2'><Link to="/fetch">Fetch</Link></Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>          
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Dashboard</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>

            
        {this.props.children}


      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Layout </Footer>
        </Layout>
      </Layout>    
    </Layout>
      </>
    )
  }
}

export default Boiler