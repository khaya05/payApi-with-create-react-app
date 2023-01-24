import { render, screen } from "../test-utils"
import { EmailForm } from "../components"

describe('EmailForm', () => {
  it('renders input', () => {
    render(<EmailForm />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('renders label', () => {
    render(<EmailForm />)
    const label = screen.getByLabelText('email')
    expect(label).toBeInTheDocument()
  })
  it('renders button', () => {
    render(<EmailForm />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})