import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Landing from './screens/Landing';
import TeenLessons  from './screens/TeenLessons'
import AdultLessons  from './screens/AdultLessons'
import Contact from './screens/Contact'
import Testing from './screens/Testing'
import Header from './components/Header';
import Footer from './components/Footer';


// function App() {
  
//   return (

//     <Router>
//       <Header />
//         <main className='py-3'>
//         <Container>
//           <Routes>
//             <Route path="/" element={<Landing />}></Route>
//             <Route path="/adultlessons" element={<AdultLessons />}></Route>
//             <Route path="/teenlessons" element={<TeenLessons/>}></Route>
//             <Route path="/contact" element={<Contact />}></Route>
//             <Route path="/testing" element={<Testing />}></Route>
//           </Routes>
//          </Container>
//         </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

function App() {
  
  return (

    <Router>
      <Header />
        <main className='py-3'>
        <Container>
            <Route path='/' component={Landing} exact/>
            <Route path="/adultlessons" component={AdultLessons} exact/>
            <Route path="/teenlessons" component={TeenLessons} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/testing" component={Testing} exact/>
         </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
