"use client"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    const returnPage = () => {
        router.back()
    }
    return ( 
        <button onClick={returnPage}>
            Voltar a página anterior
        </button>
     );
}
 
export default Login;