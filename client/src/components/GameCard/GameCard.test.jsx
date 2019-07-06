import React from 'react';
import { shallow } from 'enzyme';

import GameCard from './GameCard';

describe('GameCard', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<GameCard />);
    expect(wrapper).toMatchSnapshot();
  })
});
