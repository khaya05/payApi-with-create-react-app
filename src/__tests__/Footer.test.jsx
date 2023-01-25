import { render, within, screen } from '../test-utils';
import { Footer } from '../components';

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />);
    const logo = screen.getByRole('link', { name: 'logo' });
    expect(logo).toBeInTheDocument();
  });

  it('renders nav links', () => {
    render(<Footer />);
    const list = screen.getByRole('list', {
      name:'navigation links'
    })
    expect(list).toBeInTheDocument()

    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems.length).toBe(3)
  });

  it('renders social media links', () => {
    render(<Footer />);
    const list = screen.getByRole('list', {
      name: 'social media links',
    });
    expect(list).toBeInTheDocument()

    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems.length).toBe(3)
  });
});
