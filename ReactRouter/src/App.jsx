import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/products", element: <Products /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
