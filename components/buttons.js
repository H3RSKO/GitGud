import React from "react";
import {render} from 'ink'
import SelectInput from 'ink-select-input'

const Buttons = () => {
	const handleSelect = item => {
		item = { label: '1: Stage Changes', value: 'stageChanges' }
	};

	const items = [
		{
			label: '1: Stage Changes',
			value: 'stageChanges'
		},
		{
			label: '2: Commit Changes',
			value: 'commitChanges'
		},
		{
			label: '3: Push Changes',
			value: 'pushChanges'
		}
	];
	// SelectInput.items = {items}
	// SelectInput.onSelect = {handleSelect}
	return <SelectInput items={items} onSelect={handleSelect} /> ;
	// return SelectInput
};

module.exports = Buttons
