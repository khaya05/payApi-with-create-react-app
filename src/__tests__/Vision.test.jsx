import { render, screen } from '@testing-library/react';
import { Vision } from '../components';

describe('Vision', () => {
  const text =
    'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.';

  it('renders heading', () => {
    render(<Vision />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph', () => {
    render(<Vision />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();
  });
});
