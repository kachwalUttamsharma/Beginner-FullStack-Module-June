import React from 'react'
import { Tabs } from "antd";
import PageTitle from '../../Components/PageTitle';
import MoviesList from './MoviesList';
import TheatresList from './TheatreList';
import UpcomingList from './UpcomingList';

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin"/>

      <Tabs defaultActiveKey='1'>
          <Tabs.TabPane key="1" tab="Movies">
            <MoviesList />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Theatres"> <TheatresList /></Tabs.TabPane>
          <Tabs.TabPane tab="Upcoming Movies" key="3">
            <UpcomingList/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Admin