import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Encounter from "./pages/Encounter/Encounter";
import Layout from "./components/Layout";
import MedicalCondition from "./pages/MedicalCondition/MedicalCondition";
import Message from "./pages/Message/Message";


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
            },
            {
                path: 'medicalCondition',
                element: <MedicalCondition />
            },
            {
                path: 'message',
                element: <Message />
            }
        ]
    },
]);
