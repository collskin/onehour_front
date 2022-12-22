import { onehourRoutes } from "./routes/Routes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
   
    <Router>
    <Routes>
    <>
    {onehourRoutes.map((onehourRoutes,index) =>{
      return <Route path={onehourRoutes.path} element={<onehourRoutes.Component/>} key={index}/>
    })}
    </>       
    </Routes>
    </Router>
 
  );
}

export default App;
