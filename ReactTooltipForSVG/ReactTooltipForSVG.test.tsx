import * as React from 'react';
import { shallow } from 'enzyme';
import ReactTooltipForSVG from './ReactTooltipForSVG';

describe('<ReactTooltipForSVG />', () => {
  test('renders', () => {
    const wrapper = shallow(<ReactTooltipForSVG />);
    expect(wrapper).toMatchSnapshot();
  });
});
  