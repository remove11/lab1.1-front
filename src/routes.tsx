import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Patient from "./pages/Patient";
import Layout from "./components/Layout";
import PatientEncounter from "./pages/PatientEncounter";
import PatientObservation from "./pages/PatientObservation";
import PatientMessage from "./pages/PatientMessage";


export const router = createBrowserRouter([
    {
        path: "/",
        //element: <Layout />,
        //errorElement: <ErrorPage />,

        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: "/app",
        element: <Layout />,
        //errorElement: <ErrorPage />,
        children: [
            {
                path: 'patients',
                element: <Patient />
            },
            {
                path: 'user/encounters',
                element: <PatientEncounter />
            },
            {
                path: 'user/observations',
                element: <PatientObservation />
            },
            {
                path: 'user/messages',
                element: <PatientMessage />
            },
           
        ]
    },
]);
