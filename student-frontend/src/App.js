import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import StudentsView from './components/student/StudentsView';
import NavBar from './components/common/NavBar';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/student/AddStudent';
import EditStudent from './components/student/EditStudent';
import StudentProfile from './components/student/StudentProfile';

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentsView />}></Route>
          <Route exact path="/add-student" element={<AddStudent />}></Route>
          <Route exact path="/edit-student/:id" element={<EditStudent />}></Route>
          <Route exact path="/student-profile/:id" element={<StudentProfile />}></Route>
        </Routes>
      </Router>

    </main>
  );
}

export default App;
