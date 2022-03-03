let url = `https://basic-todo-api.vercel.app/api/`;
let root = document.querySelector('ul');
let todoInput = document.getElementById('takeInput');

function handleDelete(id) {
  fetch(url + `todo/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    displayTodos();
  });
}

function handleTogle(id, status) {
  let data = {
    todo: {
      isCompleted: !status,
    },
  };
  fetch(url + `todo/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    displayTodos();
  });
}

function handleEdit(event, id, title) {
  let input = document.createElement('input');
  input.value = title;
  let p = event.target;
  let parent = event.target.parentElement;
  parent.replaceChild(input, p);
  console.log(input, p, parent);
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && event.target.value) {
      let data = {
        todo: {
          title: event.target.value,
        },
      };
      fetch(url + `todo/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        displayTodos();
      });
    }
  });
}

function displayUI(data) {
  root.innerHTML = '';
  data.forEach((todo) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.isCompleted;
    input.addEventListener('click', () =>
      handleTogle(todo._id, todo.isCompleted)
    );
    input.setAttribute('data-id', todo._id);
    let p = document.createElement('p');
    p.addEventListener('dblclick', (event) =>
      handleEdit(event, todo._id, todo.title)
    );
    p.innerText = todo.title;
    let span = document.createElement('span');
    span.innerText = 'close';
    span.addEventListener('click', () => handleDelete(todo._id));
    span.setAttribute('data-id', todo._id);
    li.append(input, p, span);
    root.append(li);
  });
}

function displayTodos() {
  fetch(url + 'todo')
    .then((res) => res.json())
    .then((allTodos) => {
      displayUI(allTodos.todos);
    });
}

function addTodo(event) {
  if (event.keyCode === 13 && event.target.value.trim()) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    fetch(url + 'todo', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(() => {
      event.target.value = '';
      displayTodos();
    });
  }
}

todoInput.addEventListener('keyup', addTodo);
displayTodos();
