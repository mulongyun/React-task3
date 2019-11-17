import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Linggan from './Linggan';
import Shop from './Shop';
import My from './My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="yellow"
          barTintColor="white"
        >
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-home'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-home'></i>
              }
              title="首页"
              key="home"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <Home/>
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan'></i>
              }
              title="灵感"
              key="idea"
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            >
              <Linggan />
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shangcheng'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shangcheng'></i>
              }
              title="商城"
              key="Mall"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              <Shop />
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode1'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode1'></i>
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}