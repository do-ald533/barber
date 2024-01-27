import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {

	return (
		<ChakraProvider>
			<RouterProvider router={routes} />
		</ChakraProvider>
	);
}

export default App;
