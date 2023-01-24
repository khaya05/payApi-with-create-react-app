import { render, screen } from '@testing-library/react';
import { People } from '../components';

describe('People', () => {
  const text =
    "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.";

  it('renders heading', () => {
    render(<People />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph', () => {
    render(<People />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();
  });
});
