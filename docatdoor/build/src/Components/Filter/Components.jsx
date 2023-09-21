export const Components = ()=>{
    return (
        <div>
            Hello
        </div>
    )
}

export const DoctorList = (lists)=>{
    
    if (lists.length <= 0){

        
        return (<h1>NullHello</h1>)
    }
    
    return (<h1>Hi hello</h1>)

    var data = []

    for (let i = 0; i < lists.length; i++) {
        const element = lists[i];
        data.push(<DoctorCard Name={element.Name} Specialization={element.Specialization} />)
    }

    console.log("Data: ", data);

    // return (
    //     <div>
    //         {data}
    //     </div>
    // )
}

function DoctorCard(params) {
    return (
        <div>
            <h2>{params.Name}</h2>
            <h4>{params.Specialization}</h4>
        </div>
    )
}