import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";

import useFonts from "./src/hooks/useFonts";

const App = () => {
	const [IsReady, SetIsReady] = useState(false);

	const LoadFontsAndRestoreToken = async () => {
		await useFonts();
	};

	if (!IsReady) {
		return (
			<AppLoading
				startAsync={LoadFontsAndRestoreToken}
				onFinish={() => SetIsReady(true)}
				onError={() => {}}
			/>
		);
	}

	return <Routes />;
};

export default App;
