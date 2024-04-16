import './App.css';
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import ProfileCreationPage from './Components/ProfilePage/ProfilePage';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ImageSelectionPage from './Components/ImageSelectionPage/ImageSelectionPage';
import LastPage from './Components/LastPage/LastPage';

function App(){
  return(
    <>
   
   <Switch>
     <Route path='/' component={SignUpPage}></Route>
     <Route path='/profile' component={ ProfileCreationPage}></Route>
     <Route path='/img' component={ ImageSelectionPage}></Route>
     <Route path='/finish' component={LastPage}></Route>
   </Switch>

   </>
  );
}

export default App;
