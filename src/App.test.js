import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { JobsProvider } from './JobsContext';
import { UserProvider } from './UserContext';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders App using MemoryRouter', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <JobsProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </JobsProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
