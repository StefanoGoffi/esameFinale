import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/dettaglio/:id",
        element: <DetailsPage />,
    },
    {
        path: "*",
        element: <Navigate to="/home" />,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}
export default App;
