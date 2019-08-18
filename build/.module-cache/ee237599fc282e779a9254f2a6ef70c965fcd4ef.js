//React.render(<ToDo>Some random Task</ToDo>, document.getElementById('react-component'));
React.render(React.createElement(ToDoList, {count: 10}), document.getElementById('react-component'));