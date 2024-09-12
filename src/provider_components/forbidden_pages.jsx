import styles from '../index.module.css'
import {useNavigate} from "react-router-dom";
export default function Invalids(){
    const Navigate = useNavigate();
    return (
        <div className={`bg-black justify-center items-center flex ${styles.invalid} pt-[35vw]`}>
          <button onClick={()=>{Navigate('/login')}} className={'text-4xl font-bold text-green-600 bg-white p-[30px] rounded-3xl hover:bg-gray-200'}>
              Return Back To Login
          </button>
        </div>
    )
}