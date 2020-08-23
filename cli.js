#!/usr/bin/env node
'use strict';
import React from 'react';
import importJsx from 'import-jsx';
const {render} = 'ink';
import meow from 'meow';

const ui = importJsx('./ui');


const cli = meow(`
	Usage
	  $ GitGud

	Options
		--name  Your name

	Examples
	  $ GitGud --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
