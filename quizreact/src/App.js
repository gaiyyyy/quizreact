import { Layout , Menu  } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SearchUser from './components/SearchUser.js';
import UserTable from './components/UserTable.js';
import {useState} from 'react';
import SearchQuestion from './components/SearchQuestion.js';
import QuestionTable from './components/QuestionTable.js';
import AddQuestion from './components/AddQuestion.js';
import { Modal, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  
  const [selectedKey, setSelectedKey] = useState('1');
  const [questionModalOpen, setQuestionModalOpen] = useState(false);

  
  return (
    <>
    <Layout>
      <Header><h1 style={{color : '#ffffff'}}>Quiz管理系统</h1></Header>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({ key }) => setSelectedKey(key)}
            items={[
              { key: '1', icon: <UserOutlined />, label: '用户管理' },
              { key: '2', icon: <VideoCameraOutlined />, label: '题目管理' }
            ]}
          />
        </Sider>
        <Content>
          {selectedKey === '1' && (
            <>
              <SearchUser />
              <UserTable />
            </>
          )}
          {selectedKey === '2' && (
            <>
              <SearchQuestion />
              <QuestionTable />
            </>
          )}
        </Content>

      </Layout>
      <Footer style={{
        textAlign: 'center',
      }}
      >Quiz管理系统 ©2025 Created by kxr</Footer>
    </Layout>
  </>
);
}
export default App;