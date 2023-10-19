import React from 'react'
import { Tabs} from 'antd';
import PageTitle from '../../Components/PageTitle';
import TheatresList from './TheatresList';

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
           Bookings
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theater" key="2">
           <TheatresList/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile