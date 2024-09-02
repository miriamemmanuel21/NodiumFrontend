// // import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Footer from "./Component/Footer";
// import Part from "./Component/Part";
// import Navbar from "./Component/NavBar";
//
// function App() {
//   return (
//       <BrowserRouter>
//         <Routes>
//             {/*<Route  path="/" element={<Navbar/>}/>*/}
//           <Route path="/" element={<Footer />}/>
//           <Route path="/" element=<Part />/>
//
//
//         </Routes>
//       </BrowserRouter>
//   )
// }
//
// export default App;
import {useRoutes} from "react-router-dom";
import {Route} from "./route/Route";
import './index.css';


function  App (){
    return(
        useRoutes(Route)
    )
}
export default App;