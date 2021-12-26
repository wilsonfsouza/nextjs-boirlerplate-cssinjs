import { screen, render } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    const heading = screen.getByRole('heading', { name: /advanced react/i });

    expect(heading).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
