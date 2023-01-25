import { render, screen, within } from '../test-utils';
import { Navbar } from '../components';

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders close nav button', () => {
    render(<Navbar />);
    const closeButton = screen.getByAltText('close nav');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders nav links', () => {
    render(<Navbar />);
    const list = screen.getByRole('list', {
      name: 'navigation links',
    });
    expect(list).toBeInTheDocument();

    const { getAllByRole } = within(list);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('renders show nav button', () => {
    render(<Navbar />);
    const closeButton = screen.getByAltText('show nav');
    expect(closeButton).toBeInTheDocument();
  });
});
