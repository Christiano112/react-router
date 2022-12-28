import ErrorPage from './Components/ErrorPage';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Home from './Components/Home';
import User from './Components/User';
import Layout from './Components/Layout';
import ShowUsers from './Components/ShowUsers';
import "./Components/styles.css"


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className='user'>
      <h1>Something went wrong:</h1>
      <h2 style={{ color: "red" }}>{error.message}</h2>
      <button onClick={resetErrorBoundary}
        style={{ background: "#27ae60", color: "#fff", padding: ".5rem 1rem" }}>Take Me Home</button>
    </div>
  )
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => { navigate("/") }}
      >
        <header>
          <Layout />
        </header>

        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/user' element={<User userId={location} />} >
            <Route path=":userId" element={<ShowUsers />} />
          </Route>
          <Route path='*' index element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </main>
  );
}

export default App;
