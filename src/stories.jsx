import { configure } from '@storybook/react';

const req = require.context('./components/', true, /\.story\.js?x$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
