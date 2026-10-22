import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    
    // getAllByRole returns an array of elements
    const listElement = screen.getByRole('list')
    
    // Expect the length of the array to match our input
    expect(listElement).toBeInTheDocument()
  });

   test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    
    // getAllByRole returns an array of elements
    const listItemElements = screen.getAllByRole('listitem')
    
    // Expect the length of the array to match our input
    expect(listItemElements).toHaveLength(skills.length)
  });

   test('renders Login button', () => {
    render(<Skills skills={skills} />)
    
    // getAllByRole returns an array of elements
    const loginButton = screen.getByRole('button', { name: 'Login' })
    
    expect(loginButton).toBeInTheDocument()
  }); 

   test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    
    // getAllByRole returns an array of elements
    const startLearningButton = screen.queryByRole('button', { name: 'Start learning' })
    
    expect(startLearningButton).not.toBeInTheDocument()
  }); 

  test('Start Learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container);

    // getAllByRole returns an array of elements
    const startLearningButton = await screen.findByRole(
      'button', { name: 'Start learning' },
      {
        timeout: 2000, // wait for 1 second
      }
    );    
    expect(startLearningButton).toBeInTheDocument()
  }); 
}) 