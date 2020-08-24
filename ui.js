"use strict";
const React = require("react");

const { useEffect, useState, useRef } = require("react");
const { Text, Box, measureElement, Newline } = require("ink");
const statusOutput = require("./gitStatusOutput");
const Renderer = require("./components/divider");
const importJsx = require('import-jsx');
const Buttons = importJsx('./components/buttons');
const {render} = require('ink')

const enterAltScreenCommand = '\x1b[?1049h';
const leaveAltScreenCommand = '\x1b[?1049l';

const exitFullScreen = () => {
  process.stdout.write(leaveAltScreenCommand);
};

const App = () => {
	const [status, setStatus] = useState("");
	const [appWidth, setWidth] = useState(null);

	const ref = useRef(null);

	useEffect(() => {
		setStatus(statusOutput());
		exitFullScreen()
		process.stdout.write(enterAltScreenCommand)
		const { width, height } = measureElement(ref.current);
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
					<Box height="100%" alignItems="center">
						<Text>
							<Text color="red" bold underline>
								Unstaged Changes
							</Text>
							<Newline />
							{status.unstaged}
						</Text>
					</Box>
				</Box>
				<Text color="red">
					<Newline />
					<Renderer width={appWidth} />
				</Text>
				<Box className="stage-area" height="50%">
					<Box height="100%" alignItems="center">
						<Text>
								<Text color="red" bold underline>
									Staged Changes
								</Text>
								<Newline />
								{status.staged}
							</Text>
					</Box>
					<Box borderStyle="round" borderColor="red">
						{/* <Buttons /> */}
						{Buttons}
					</Box>
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
