import Todolist from "./Todolist";

export default function Home() {
    return(
        <div>
            <h1>HOME PAGE</h1>
            <Todolist /> {/* Renderöidään lista vain etusivulla */}
        </div>
    )
}
