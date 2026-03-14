import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../../../components/sections/index/hero'

describe('Hero section parts', () => {

	it('renders main heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Lenando Respati\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

	it('renders sub heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /I design and build meaningful experiences\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

})