import { render, screen } from '@testing-library/react';
import { Form } from '../components';

describe('Form', () => {
  it('renders name input', () => {
    render(<Form />);
    const nameInput = screen.getByPlaceholderText('name');
    expect(nameInput).toBeInTheDocument();
  });

  it('renders email input', () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText('email address');
    expect(emailInput).toBeInTheDocument();
  });
  it('renders company name input', () => {
    render(<Form />);
    const companyNameInput = screen.getByPlaceholderText('company name');
    expect(companyNameInput).toBeInTheDocument();
  });
  it('renders title input', () => {
    render(<Form />);
    const titleInput = screen.getByPlaceholderText('title');
    expect(titleInput).toBeInTheDocument();
  });
  it('renders message input', () => {
    render(<Form />);
    const messageInput = screen.getByPlaceholderText('message');
    expect(messageInput).toBeInTheDocument();
  });

  it('renders checkbox', () => {
    render(<Form />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('renders submit Button', () => {
    render(<Form />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
});
