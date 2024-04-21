import {  Layout,theme } from 'antd';

const Header = (props) => {
  
  return (
    <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          // color:'white',
          backgroundColor: '#3277a8',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
          marginLeft:'3px',
          marginRight:'3px',
          marginTop:3,
          border: '2px solid black'
        }}
      >
        <div className="demo-logo" />
        <h1>{props.title}</h1>
      </Layout.Header>
  )
}

export default Header