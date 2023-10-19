import React from 'react'
import { Tabs } from "antd";
import PageTitle from '../../Components/PageTitle';
import MoviesList from './MoviesList';

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin"/>

      <Tabs defaultActiveKey='1'>
          <Tabs.TabPane key="1" tab="Movies">
            <MoviesList />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Theatres">{"Theatre"}</Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Admin