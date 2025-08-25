


function ListaTareas(){
    const tareas =[ "hacer las practicas de react", "estudiar bases de datos "]
    const usuario = "paulo"  
    return(
        <div>
            lista de tareas del usuario{usuario}

            <ul>
                {tareas.map((tareas, index)=>(
                    <li key={index}> {tareas} </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTareas;