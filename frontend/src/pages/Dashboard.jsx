import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard - CMReductivo</h1>
        <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
      </header>
      <main>
        <div className="card">
          <h2>Bienvenido</h2>
          <p>Has iniciado sesión correctamente.</p>
          <p className="token-preview">
            Token: <code>{token.substring(0, 20)}...</code>
          </p>
        </div>
        
        <div className="card">
          <h3>Tu rol</h3>
          <p>Gestión de usuarios y contenido</p>
        </div>
      </main>
    </div>
  )
}