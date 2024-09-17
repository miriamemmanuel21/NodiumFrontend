import styles from '../index.module.css'
import {useNavigate} from "react-router-dom";
export default function Invalids(){
    const Navigate = useNavigate();
    return (
        <div className={`bg-black justify-canter = items-end flex ${styles.invalid} pt-[]lg:pt-[35vw] `}>
          <button onClick={()=>{Navigate('/login')}} className={'text-xl p-[10px] md:text-4xl font-bold text-green-600' +
              ' bg-white md:p-[30px] rounded-3xl hover:bg-gray-200'}>
              Return Back To Login
          </button>
        </div>
    )
}