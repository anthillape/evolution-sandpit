import { configure } from '@storybook/react';

function loadStories() {
	require('../src/stories.jsx');
}

configure(loadStories, module);
