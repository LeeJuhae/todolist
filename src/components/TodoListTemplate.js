import '../styles/TodoListTemplate.css';

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className='todo-list-template'>
      <div className='title'>todolist</div>
      <section className='form-wrapper'>{form}</section>
      <section className='todos-wrapper'>{children}</section>
    </main>
  );
};

export default TodoListTemplate;
