import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Patient from "./pages/Patient";
import Layout from "./components/Layout";
import PatientEncounter from "./pages/PatientEncounter";
import PatientObservation from "./pages/PatientObservation";
import PatientMessage from "./pages/PatientMessage";
import Doctor from "./pages/doctor";
import DoctorCreate from "./pages/DoctorCreate";
import Staff from "./pages/Staff";
import StaffCreate from "./pages/StaffCreate";
import PatientCondition from "./pages/PatientCondition";
import DoctorDetail from "./pages/DoctorDetail";


export const router = createBrowserRouter([
    {
        path: "/",
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
        children: [
            {
                path: 'patients',
                element: <Patient />
            },
            {
                path: 'doctors',
                element: <Doctor />
            },
            {
                path: 'staff',
                element: <Staff />
            },
            {
                path: 'create-doctor',
                element: <DoctorCreate />
            },
            {
                path: 'create-staff',
                element: <StaffCreate />
            },
            {
                path: ':userId/encounters',
                element: <PatientEncounter />
            },
            {
                path: 'doctor/:userId',
                element: <DoctorDetail />
            },
            {
                path: ':userId/conditions',
                element: <PatientCondition />
            },
            {
                path: ':userId/:encounterId/observations',
                element: <PatientObservation />
            },
            {
                path: ':userId/messages',
                element: <PatientMessage />
            },
        ]
    },
]);
