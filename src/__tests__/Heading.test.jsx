import { render, screen } from '@testing-library/react';
import { Heading } from '../components';

describe('Heading', () => {
  it('renders heading', () => {
    render(<Heading heading="about us" />);
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  });
});
