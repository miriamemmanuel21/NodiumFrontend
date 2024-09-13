import Icon from '@iconify/react'
export default function ApplicationOverview({props}){
    const [notification, applications,reviews ] = props;
    const getJobs= async ()=>{
        return await fetch(`${notification}`,{
                method :'GET',
                headers:{
                    'Content-Type': 'Application/json'
                }
            })
    }
    const getApplication= async ()=>{
         return   await fetch(`${applications}`,{
                method :'GET',
                headers:{
                    'Content-Type': 'Application/json'
                }
            })
    }
    const getReviews= async () =>{
        return await fetch(`${reviews}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    const overview =[
        [<Icon icon="arcticons:jobstreet" width="1.2rem" height="1.2rem"  style={{color: 'black'}} />,getJobs()],
        [<Icon icon="marketeq:job" width="1.2rem" height="1.2rem" />,getApplication()],
        [<Icon icon="material-symbols-light:reviews-outline" width="1.2rem" height="1.2rem"  style={{color: 'black'}}/>,getReviews()]
    ]
    return (
        <div>
            {
                overview.map(([icon,response],index)=>(
                    <div>
                        <p>{icon}</p>
                        <span>
                            <p>{response.data.data}</p>
                            <p>{index=== 0?}</p>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}