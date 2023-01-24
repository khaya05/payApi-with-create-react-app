import { render, screen } from "@testing-library/react"
import { Stats } from "../components"

describe('Stats', () => {
  it('renders image', () => {
    render(<Stats />)
    const image = screen.getByAltText('team working')
    expect(image).toBeInTheDocument()
  })

  it('renders all paragraphs', () => {
    render(<Stats />)
    const paragraph_1 = screen.getByText('team members');
    expect(paragraph_1).toBeInTheDocument()

    const paragraph_2 = screen.getByText('300+');
    expect(paragraph_2).toBeInTheDocument()

    const paragraph_3 = screen.getByText('office in the us');
    expect(paragraph_3).toBeInTheDocument()

    const paragraph_4 = screen.getByText('3');
    expect(paragraph_4).toBeInTheDocument()

    const paragraph_5 = screen.getByText('transactions analyzed');
    expect(paragraph_5).toBeInTheDocument()

    const paragraph_6 = screen.getByText('10M+');
    expect(paragraph_6).toBeInTheDocument()
  })
})