import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it('renders the search bar with default props', () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    expect(
      screen.getByPlaceholderText('Search GitHub username...')
    ).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('calls the onSearch handler with the correct input value when submitted', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search GitHub username...');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'octocat' } });
    expect(input).toHaveValue('octocat');

    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith('octocat');
    expect(input).toHaveValue('');
  });

  it('shows an error message when error is true', () => {
    render(<SearchBar onSearch={mockOnSearch} error={true} />);

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('does not call onSearch if input is empty', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it('applies the correct classes for light mode', () => {
    render(<SearchBar onSearch={mockOnSearch} theme="light" />);
    const inputContainer = screen
      .getByPlaceholderText('Search GitHub username...')
      .closest('div');

    expect(inputContainer).toHaveClass('bg-white');
    expect(inputContainer).toHaveClass('border-gray-300');
  });

  it('applies the correct classes for dark mode', () => {
    render(<SearchBar onSearch={mockOnSearch} theme="dark" />);
    const inputContainer = screen
      .getByPlaceholderText('Search GitHub username...')
      .closest('div');

    expect(inputContainer).toHaveClass('bg-mediumBlue');
    expect(inputContainer).toHaveClass('border-mediumBlue');
  });
});
