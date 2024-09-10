import {useRoutes} from "react-router-dom";
import {Route} from "./route/Route";
import './index.css';


function  App (){
    return(
        useRoutes(Route)
    )
}
export default App;