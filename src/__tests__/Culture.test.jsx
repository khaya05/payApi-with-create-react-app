import { render, screen } from '@testing-library/react';
import { Culture } from '../components';

describe('Culture', () => {
  const text =
    "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.";

  it('renders heading', () => {
    render(<Culture />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph', () => {
    render(<Culture />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();
  });
});
