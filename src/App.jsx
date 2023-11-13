import logo from './logo.svg';
import './App.css';
import StudentEnroll from './college components/StudentEnroll';
import TeacherEnroll from './college components/TeacherEnroll';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './college components/Navbar';
import Sudentdata from './college components/Sudentdata';
import TeacherData from './college components/TeacherData';
import HomePage from './college components/HomePage';
import Login from './college components/Login';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login/>} />
           <Route path='/Login' element={<Login/>} />
           <Route path='/HomePage' element={<HomePage/>}/>
           <Route path='StudentEnroll' element={<StudentEnroll/>}/>
           <Route path='StudentData' element={<Sudentdata/>}/>  
           <Route path='TeacherEnroll' element={<TeacherEnroll/>}/>
           <Route path='TeacherData' element={<TeacherData/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
