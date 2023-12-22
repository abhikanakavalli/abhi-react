import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const err= useRouteError();
    return(
        <div>
            <h1>OOOoops!!!</h1>
            <h2>Something Always Wrong...</h2>
            <h3>{err.status} - {err.statusText}</h3>
        </div>
    )
}

export default ErrorPage;