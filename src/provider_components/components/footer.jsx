import Image from '../../assets/nodium.png'
export default function Footer(){
    return (
        <div className={'mt-[-50px] bg-white flex-col'}>
            <div className={'flex'}>
                <img src={Image} height={40} width={40} alt=""/>
                <p className={'text-lg font-bold text-green-600 pt-3'}>Nodium</p>
            </div>
            <p className={'flex text-lg font-medium text-center'}>
                Copyright &copy;{new Date().getFullYear()} All Rights Reserved by
                <span className={'text-green-600'}>Nodium</span>
            </p>
        </div>

    )
}