"use strict";
const React = require("react");
const { useEffect, useState, useRef } = require("react");
const { Text, Box, measureElement, Newline } = require("ink");
const statusOutput = require("./testChildProcess");
const Renderer = require("./components/divider");

const App = () => {
	const [status, setStatus] = useState("");
	const [appWidth, setWidth] = useState(null);

	const ref = useRef(null);

	useEffect(() => {
		setStatus(statusOutput());
		const { width, height } = measureElement(ref.current); //Use the measureElement with GitBranch later down the line to make our graph
		setWidth(width);
	}, []);

	return (
		<Box
			borderStyle="round"
			borderColor="red"
			className="full-app"
			height="100%"
			flexGrow={1}
		>
			<Box className="left-box" width="50%" flexDirection="column" ref={ref} flexGrow={1}>
				<Box className="changed-files" height="50%" >
					<Text>Here: {status}</Text>
					<Newline />
				</Box>
				<Text color="red">
					<Newline />
					<Renderer width={appWidth} />
				</Text>
				<Box className="stage-area" height="50%">
					<Text>Staged-Area</Text>
				</Box>
			</Box>
			<Box
				className="gitBranch"
				borderStyle="round"
				borderColor="red"
				className="left-box"
				width="50%"
				margin="-1"
			>
				<Text>Git Branch</Text>
			</Box>
		</Box>
	);
};

module.exports = App;
