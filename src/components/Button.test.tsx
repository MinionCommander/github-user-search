import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClick handler when disabled', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} disabled />);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies the correct variant classes', () => {
    const { rerender } = render(
      <Button label="Primary" onClick={() => {}} variant="primary" />
    );
    expect(screen.getByText('Primary')).toHaveClass('bg-primary');

    rerender(
      <Button label="Secondary" onClick={() => {}} variant="secondary" />
    );
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-500');

    rerender(<Button label="Danger" onClick={() => {}} variant="danger" />);
    expect(screen.getByText('Danger')).toHaveClass('bg-red-500');
  });

  it('applies the correct size classes', () => {
    const { rerender } = render(
      <Button label="Small" onClick={() => {}} size="small" />
    );
    expect(screen.getByText('Small')).toHaveClass('py-1 px-3 text-sm');

    rerender(<Button label="Medium" onClick={() => {}} size="medium" />);
    expect(screen.getByText('Medium')).toHaveClass('py-2 px-6 text-base');

    rerender(<Button label="Large" onClick={() => {}} size="large" />);
    expect(screen.getByText('Large')).toHaveClass('py-3 px-8 text-lg');
  });

  it('renders the button as disabled when the disabled prop is passed', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled />);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
