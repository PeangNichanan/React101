import { log } from 'console';
import Message from './Message';
import ListGroup from './component/ListGroup';
import Alert from './component/Alert';
import Button from './component/Button';
import Form from './component/Form';
import UserList from './component/DataList';
import users from './mock/Users';

function App() {
  let items = ['New York','San Francisco','Tokyo','London','Paris']

  const handleSelectItem = (item:string)=>{
    console.log(item);
    
  }

  return (
      <div className=' bg-gradient-to-r from-purple-500 to-blue-400 h-screen grid grid-cols-2 h-screen'>
        {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> */}
        {/* <Alert>Hello World</Alert> */}
        {/* <Button onClick={() => console.log('Clicked')} color='blue' children = "My Button"/> */}
        <Form/>
        <div className='flex justify-start items-center h-full'>
          <UserList/>
        </div>
      </div>
  );
}



export default App; 