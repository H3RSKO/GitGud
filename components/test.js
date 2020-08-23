import React, { useState } from 'react';
import { render, Box, Color } from 'ink';
import { Tabs, Tab } from 'ink-tab';

function TabExample(props) {
  const [activeTabName, setActiveTabName] = useState(null);

  // the handleTabChange method get two arguments:
  // - the tab name
  // - the React tab element
  function handleTabChange(name, activeTab) {
    // set the active tab name to do what you want with the content
    setActiveTabName(name);
  }

  return (
    <Box flexDirection="column">
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
  );
}

render(<TabExample />);
