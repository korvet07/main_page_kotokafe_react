import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper"
import { GlobalStyle } from "./styles";
import starList from "../../mocks/starList";

export default function App() {
	return (
	<>
		<GlobalStyle />
		<PageWrapper stars={starList} />
	</>
	);
}
