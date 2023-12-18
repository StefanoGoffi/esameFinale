import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import "./App.scss";
import { Suspense, lazy } from "react";
import DetailsPage from "./pages/DetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
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
    return (
        <Suspense fallback={<p>loading</p>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}
export default App;
