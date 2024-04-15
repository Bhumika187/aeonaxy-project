import './App.css';
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import ProfileCreationPage from './Components/ProfilePage/ProfilePage';
import {Routes,Route,Link} from 'react-router-dom';
import ImageSelectionPage from './Components/ImageSelectionPage/ImageSelectionPage';
import LastPage from './Components/LastPage/LastPage';

function App(){
  return(
    <>
   <Routes>
     <Route path='/' element={<SignUpPage/>}></Route>
     <Route path='/profile' element={ <ProfileCreationPage/>}></Route>
     <Route path='/img' element={ <ImageSelectionPage/>}></Route>
     <Route path='/finish' element={<LastPage/>}></Route>
   </Routes>
   </>
  );
}

export default App;