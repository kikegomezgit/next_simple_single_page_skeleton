import {  Layout,theme } from 'antd';

const Footer = (props) => {
  return (
    <Layout.Footer
        style={{
          textAlign: 'center',
          // backgroundColor: 'transparent',
          marginLeft:'3px',
          marginRight:'3px',
          marginTop:3,
          border: '2px solid black',
          backgroundColor: '#3277a8',
        }}
      >
        <div
          style={{
            // background: 'transparent',
          }}
        >
        <p>{props.title}</p>
        </div>
      </Layout.Footer>
  )
}

export default Footer