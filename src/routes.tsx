import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Encounter from "./pages/Encounter";
import Layout from "./components/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //errorElement: <ErrorPage />,

        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'encounter',
                element: <Encounter />
            }
        ]
    },
]);
