import React from 'react';
import Layout from './Layout.jsx';
import { shallow } from 'enzyme';

test('It renders', () => {
	const component = shallow(<Layout />);
	expect(component).toMatchSnapshot();
});
