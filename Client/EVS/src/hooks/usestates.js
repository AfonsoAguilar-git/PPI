import { useEffect, useState } from "react"

function useAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function signup(username, password){
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            if (!response.ok) {
                const errData = await response.json();
    
                // Se o 'detail' for um objeto/array (comum em erros do FastAPI), transforma em texto
                let mensagemErro = "Falha no signup";
    
                if (errData.detail) {
                    mensagemErro = typeof errData.detail === "object" 
                    ? JSON.stringify(errData.detail) 
                    : errData.detail;
                }   
    
                throw new Error(mensagemErro);
            }

            const data = await response.json()
            setUser(data)
           
            setLoading(false)
            return true // Para o componente saber que pode mudar de página
        } catch (err) {
            setError(err.message)
            setLoading(false)
            return false
        }
    }
  

    // 2. Função de Login
    async function login(username, password) {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            if (!response.ok) {
                const errData = await response.json()
                throw new Error(errData.detail || "Falha no login")
            }

            const data = await response.json()
            setUser(data)
           
            setLoading(false)
            return true // Para o componente saber que pode mudar de página
        } catch (err) {
            setError(err.message)
            setLoading(false)
            return false
        }
    }

    // 3. Função de Logout
    function logout() {
        setUser(null)
       
    }

    // Retorna os estados e as funções, tal como no teu exemplo de expenses
    return { user, loading, error, login, signup, logout, isLoggedIn: !!user }
}

export default useAuth