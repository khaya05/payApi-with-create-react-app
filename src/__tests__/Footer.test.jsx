import { render, within, screen } from '../test-utils';
import { Footer } from '../components';

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />);
    const logo = screen.getByRole('link', { name: 'logo' });
    expect(logo).toBeInTheDocument();
  });

  it.skip('renders nav links', () => {
    render(<Footer />);
    const list = screen.getElementsByClassName('footer__nav-links');
    expect(list).toBeInTheDocument()

    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems.length).toBe(3)
  });

  it.skip('renders social media links', () => {
    render(<Footer />);
    const list = screen.getElementsByClassName('socials');
    expect(list).toBeInTheDocument()

    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems.length).toBe(3)
  });
});
