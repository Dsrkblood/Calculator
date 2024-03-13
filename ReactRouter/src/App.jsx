import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Error from "./pages/Error.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "products", element: <Products /> },
			{ path: "products/:productId", element: <ProductDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
