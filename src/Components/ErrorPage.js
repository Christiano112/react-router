import ErrorImage from "../images/error.webp";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: "center" }} className="user">
            <h1>404 Page</h1>

            <section>
                <img src={ErrorImage} alt="Error Pic" />
            </section>

            <button onClick={() => navigate("/")}
                style={{ background: "#27ae60", color: "red", padding: ".5rem 1rem", marginBottom: "2rem" }}>
                Take me Home
            </button>
        </div>
    )
}

export default ErrorPage;