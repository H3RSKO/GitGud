const React = require("react");
const SelectInput = require('ink-select-input')

const Buttons = () => {
	const handleSelect = item => {
		// item = { label: '1: Stage Changes', value: 'stageChanges' }
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

	return <SelectInput items={items} onSelect={handleSelect} isFocused="true" />

};

module.exports = Buttons
