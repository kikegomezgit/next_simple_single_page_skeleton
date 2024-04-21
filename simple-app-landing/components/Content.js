"use client"
import {  Layout,theme } from 'antd';

const Content = (props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout.Content
        style={{
          // padding: '0 20px',
          marginTop:'10px',
          marginLeft:'3px',
          marginRight:'3px',
          border: '2px solid black'
        }}
      >
        <div
          style={{
            background: '#babdbf',
            minHeight: 800,
            // maxHeight:800
            // padding: 22,
          }}
        >
          <div>{props.content}</div>
        </div>
      </Layout.Content>
  )
}

export default Content