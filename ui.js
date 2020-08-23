"use strict";
import React from "react";

import { useEffect, useState, useRef } from "react";
import { Text, Box, measureElement, Newline } from "ink";
import statusOutput from "./testChildProcess";
import Renderer from "./components/divider";
import Buttons from "./components/buttons"
import { Tabs, Tab } from 'ink-tab'
import Buttons = importJsx('./components/buttons');

const enterAltScreenCommand = '\x1b[?1049h';
const leaveAltScreenCommand = '\x1b[?1049l';


const exitFullScreen = () => {
	process.stdout.write(leaveAltScreenCommand);
};

export default App = () => {
	const [status, setStatus] = useState("");
	const [appWidth, setWidth] = useState(null);
	const [activeTabName, setActiveTabName] = useState(null);

	const ref = useRef(null);

	function handleTabChange(name, activeTab) {
		// set the active tab name to do what you want with the content
		setActiveTabName(name);
	}

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
								Modified files:
							</Text>
							<Newline />
							{status}
						</Text>
					</Box>
				</Box>
				<Text color="red">
					<Newline />
					<Renderer width={appWidth} />
				</Text>
				<Box className="stage-area" height="50%">
					<Text>Staged-Area</Text>
				</Box>
				<Box className="button-box" borderStyle="round" borderColor="red">
					{/* <Buttons/> */}
					{/* {Buttons.items} */}
					<Box>
						{activeTab === 'foo' && 'Selected tab is "foo"'}
						{activeTab === 'bar' && 'Selected tab is "bar"'}
						{activeTab === 'baz' && 'Selected tab is "baz"'}
					</Box>
					<Tabs onChange={handleTabChange}>
						<Tab name="foo">Foo</Tab>
						<Tab name="bar">Bar</Tab>
						<Tab name="baz">Baz</Tab>
      </Tabs>
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

// module.exports = App;
