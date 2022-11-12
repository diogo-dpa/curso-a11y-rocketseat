import "../styles/globals.css";
import type { AppProps } from "next/app";
import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Só será executado no lado do cliente
		axeAccessibilityReporter();
	}, []);
	return <Component {...pageProps} />;
}
