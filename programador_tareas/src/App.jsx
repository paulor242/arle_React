import './App.css';
import ListaTareas from './components/listaTareas';
function App() {
    const name = "paulo";

    return (
        <div>
            <header>
                <h1> 
                    welcome to TaskFlow
                </h1>
                
                <h2> {name }</h2>
            </header>
            
            <p>
                Bienvenido a TaskFlow, tu dashboard aliado para organizar, priorizar y completar tus tareas de manera sencilla y eficiente. Nuestra plataforma está diseñada para ayudarte a mantener el control de tus pendientes diarios, proyectos y metas, sin importar si trabajas de forma individual o en equipo. Con TaskFlow podrás:
                <ul>
                    <li>Crear y gestionar recordatorios personalizados.</li>
                    <li> Visualizar tus tareas en un flujo claro y organizado.</li>
                    <li>Optimizar tu tiempo enfocándote en lo que realmente importa.</li>
                </ul>
                ¡Únete a nosotros y comienza a transformar tu manera de organizar y completar tus tareas diarias!
                <a href="contador"> 
                    <button>vamos</button>
                </a>
            </p>
            < ListaTareas />  
        </div>
    ) 
}

export default App;
