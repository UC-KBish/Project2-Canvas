import Layout from 'antd/es/layout/layout';
import ProgressBar from './ProgressBar';
import CardGrids from './CardGrids';


function Dashboard(props) {
    let color = props.colorBgContainer
    
    return <div>
        <Layout
          style={{
            padding: '0 2% 5%',
            background: {color},
            backgroundColor: 'whitesmoke',
            height: '100%',
          }}
        >
        
        <div>
          <h1>Dashboard</h1>
        </div>

          <ProgressBar /><CardGrids setterFunc={props.setterFunc}/>

        </Layout>
    </div>
}

export default Dashboard;