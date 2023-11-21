import { Contexto } from "../contexts/Contexto";
import { useContext } from "react";

function useContexto(){
    const context = useContext(Contexto);
    return context; 
}

export default useContexto;