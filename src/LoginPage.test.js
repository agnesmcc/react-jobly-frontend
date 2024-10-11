import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { JobsProvider } from './JobsContext';
import { UserProvider } from './UserContext';

test('renders App using MemoryRouter', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/login']}>
        <JobsProvider>
        <UserProvider>
          <App />
        </UserProvider>
        </JobsProvider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText('Hello again...')).toBeInTheDocument();
  });
  