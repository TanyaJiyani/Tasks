import React from 'react';
import Card from '../Components/Card';
import ErrorBoundary from '../Components/ErrorBound';

export default function TodoList() {
    const todos = [
        { id: 1, label: 'Task 1' },
        { id: 2, label: 'Task 2' },
        { id: 3, label: '' }
    ];

    return (
        <div >
            <h3>Todo List</h3>
            {todos.map((todo) =>
            (
                <ErrorBoundary>
                    <Card title={todo.label} />
                </ErrorBoundary>
            )
            )}

            <br />
            <span>Note : Todo List will throw error if Label is not available..
                <br />
                Here Cards have their own Error Boundary, so only Third task will throw error.
            </span>

        </div>
    )
}
