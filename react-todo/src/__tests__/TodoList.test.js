import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders the initial todo list', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Write Tests' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Write Tests')).toBeInTheDocument();
    });

    test('toggles a todo completed state', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');

        // Check initial state (not completed)
        expect(todo).not.toHaveClass('completed');

        // Simulate clicking the todo to toggle completion
        fireEvent.click(todo);

        // Verify the completed class is added
        expect(todo).toHaveClass('completed');

        // Click again to toggle back to not completed
        fireEvent.click(todo);

        // Verify the completed class is removed
        expect(todo).not.toHaveClass('completed');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        const deleteButton = screen.getByTestId('delete-learn-react'); // Assuming delete button has a unique test ID

        // Simulate deleting the todo
        fireEvent.click(deleteButton);

        // Verify the todo is no longer in the document
        expect(todo).not.toBeInTheDocument();
    });
});
