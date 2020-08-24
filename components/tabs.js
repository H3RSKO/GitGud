const React = require('react');
const { useState } = require('react');
const { Box, Color } = require('ink');
const { Tabs, Tab } = require('ink-tab');

function AppTabs(props) {
  const [activeTabName, setActiveTabName] = useState(null);

  // the handleTabChange method get two arguments:
  // - the tab name
  // - the React tab element
  handleTabChange = (name, activeTab) => {
    // set the active tab name to do what you want with the content
    setActiveTabName(name);
  }

  return (
    <Box >
      <Tabs onChange={handleTabChange}>
        <Tab name="foo">Foo</Tab>
        <Tab name="bar">Bar</Tab>
        <Tab name="baz">Baz</Tab>
      </Tabs>
    </Box>
  );
}

// render(<TabExample />);

module.exports = AppTabs
