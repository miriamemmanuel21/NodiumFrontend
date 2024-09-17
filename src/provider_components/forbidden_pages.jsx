import styles from '../index.module.css'
import {useNavigate} from "react-router-dom";
export default function Invalids(){
    const Navigate = useNavigate();
    return (
        <div className={`bg-black justify-center items-center flex ${styles.invalid} pt-[]lg:pt-[35vw] `}>
          <button onClick={()=>{Navigate('/login')}}
                  className={`text-xl p-[10px] md:text-4xl font-bold text-green-600 bg-white`}>
              Return Back To Login
          </button>
        </div>
    )
}