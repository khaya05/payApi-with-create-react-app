import { render, screen } from '@testing-library/react';
import { Business } from '../components';

describe('Business', () => {
  const text =
    'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.';
  
  it('renders heading', () => {
    render(<Business />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph', () => {
    render(<Business />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();
  });
});
