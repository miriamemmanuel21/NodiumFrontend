export default function Switch({component1, component2}) {

    return (
        <div className={'flex-col md:flex-col'}>
            <div>{component1}</div>
            <div>{component2}</div>
        </div>
    )
}