import { render, screen, within } from '@testing-library/react';
import { Companies } from '../components';

describe('Companies', () => {
  it('renders a list of companies', () => {
    render(<Companies />);
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems.length).toBe(6)
  });
});
