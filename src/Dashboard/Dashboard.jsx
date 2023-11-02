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
            backgroundColor: 'lightgreen',
            height: '100%',
          }}
        >
          <ProgressBar /><CardGrids setterFunc={props.setterFunc}/>

        </Layout>
    </div>
}

export default Dashboard;