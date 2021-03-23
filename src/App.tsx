import { Provider } from "react-redux";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import store from "./redux/reduxStore";

const App = () => {
	return (
		<>
			<MainPage>
				<Footer />
			</MainPage>
		</>
	);
};

const WrappedApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default WrappedApp;
