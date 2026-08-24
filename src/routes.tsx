import { BrowserRouter,Routes, Route } from "react-router-dom"
import Termos from "./pages/Termos"
import Home from "./pages/Home"
import Obrigado from "./pages/Obrigado"
export default function RoutesApp(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/termos-politica-de-privacidade" element={<Termos/>}/>
            <Route path="/obrigado" element={<Obrigado/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
