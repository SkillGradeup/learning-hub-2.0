import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      <h1 className="border-4 border-red-500">Welcome to on board react js app</h1>
      <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    </div>
  );
}

export default App;
