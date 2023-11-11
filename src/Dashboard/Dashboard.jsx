import Layout, { Content } from 'antd/es/layout/layout';
import ProgressBar from './ProgressBar';
import CardGrids from './CardGrids';
import Sider from 'antd/es/layout/Sider';
import TodoList from '../Components/todolist/ToDoList';


function Dashboard(props) {
    let color = props.colorBgContainer
    
    return <div>
        <Layout
          style={{
            padding: '0 2% 5%',
            background: {color},
            backgroundColor: 'white',
            height: '100vh'
          }}
        >
          <Content>
            <div>
              <h1 style={{marginLeft: '2%'}}>Dashboard</h1>
            </div>

            <ProgressBar /><CardGrids setterFunc={props.setterFunc}/>
          </Content>

          <Sider width='25%'
            style={{
              backgroundColor: 'white',
              borderLeft: '2px solid black',
              padding: '2%',
              width: '20%',
              height: '100vh'
            }}>
            <TodoList/>
          </Sider>

        </Layout>
    </div>
}

export default Dashboard;