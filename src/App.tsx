import { Provider } from "react-redux";
import MainPage from "./components/MainPage";
import store from "./redux/reduxStore";

const App = () => {
	return (
		<>
			<MainPage />
			{/* <footer>
				<div className="attribution">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a href="https://github.com/s3rbug" target="_blank" rel="noreferrer">
						s3rbug
					</a>
					.
				</div>
			</footer> */}
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
