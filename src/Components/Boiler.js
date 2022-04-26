import React, { Component } from 'react'
import '../App.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export class Boiler extends Component {
  render() {
    return (
      <>
         <Layout>
      <Header style={{padding:10}}>
      
      <Avatar size="large" style={{float:"right"}} icon={<UserOutlined />} />
      <Title style={{color:'white'}} level={3}>MOBIO</Title>
      </Header>
        <Layout>
        <Sider>
          <Menu
          defaultSelectedKeys={['Dashboard']}
          mode="inline"
          >
            <Menu.Item key='Dashboard'>
              Dashboard
            </Menu.Item>
            <SubMenu
            title={
              <span>
                {/* <Icon type="mail" /> */}
                <span>About US</span>
              </span>
            }
            >
              <Menu.ItemGroup key='AboutUS' title='Country 1'>
                <Menu.Item key='location1'> Location 1</Menu.Item>
                <Menu.Item key='location2'> Location 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>          
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>Content</div>
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