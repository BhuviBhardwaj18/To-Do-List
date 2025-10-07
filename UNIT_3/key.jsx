const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Master JavaScript', completed: false },
];

const App = () =>
{
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todos={todos} />
        </div>
    )
};
export default App;