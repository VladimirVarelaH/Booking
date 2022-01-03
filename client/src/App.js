import './App.css';

import Form from './SendFile';
import Donlowder from './GetFile';
import MyIndex from './Index/index.jsx';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Routes>
        <Route path='/' element={<MyIndex/>}/>
        <Route path='/:actividad' element={<Form/>}/>
        <Route path='/reporte' element={<Donlowder/>}/>
      </Routes>
    </div>
  );
}

export default App;
