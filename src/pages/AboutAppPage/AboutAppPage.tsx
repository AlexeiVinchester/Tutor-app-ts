import { Button, Container, TextField } from "@mui/material";
import { createContext, useContext, useReducer, useState } from "react";

enum ActionType {
  addNewToDo = "ADD_NEW_TODO",
  editToDo = "EDIT_TO_DO",
  deleteToDo = "DELETE_TO_DO"
};

type TToDo = {
  id: number;
  title: string;
  done: boolean;
};

type TReducerActions =
  {
    type: ActionType.addNewToDo,
    payload: TToDo
  } |
  {
    type: ActionType.editToDo,
    payload: TToDo
  } |
  {
    type: ActionType.deleteToDo,
    payload: number
  };


const reducer = (state: TToDo[], action: TReducerActions) => {
  switch (action.type) {
    case ActionType.addNewToDo: {
      return [...state, action.payload];
    }
    case ActionType.deleteToDo: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case ActionType.editToDo: {
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return action.payload
        }
      })
    }
  }
};

const defaultToDos: TToDo[] = [{
  id: 0,
  title: 'Initial Todo',
  done: false
}];

const AddNewTask = () => {
  const [inputValue, setInputValue] = useState('');
  const { dispatch } = useDispatchContext();
  const { todos } = useTodosContext()

  const handleClickAddNewTodo = (title: string) => () => {
    dispatch({
      type: ActionType.addNewToDo,
      payload: {
        id: todos.length,
        title,
        done: false
      }
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex gap-4">
      <TextField
        type="text"
        onChange={handleChange}
        value={inputValue}
        className="mb-10"
      />
      <Button onClick={handleClickAddNewTodo(inputValue)}>Add new todo</Button>
    </div>
  )
}

const Task = ({ todo }: { todo: TToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useDispatchContext()
  let todoContent = null;

  const handleClickEdit = (todo: TToDo) => {
    dispatch({
      type: ActionType.editToDo,
      payload: todo
    })
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: ActionType.deleteToDo,
      payload: id
    })
  };

  if (isEditing) {
    todoContent = <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => {
          handleClickEdit({ ...todo, title: e.target.value })
        }}
      />
      <Button onClick={() => setIsEditing(false)}>save</Button>
    </>
  } else {
    todoContent =
      <div>
        {todo.title}
        <Button onClick={() => setIsEditing(true)}>edit</Button>
      </div>
  }

  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          handleClickEdit({
            ...todo,
            done: e.target.checked
          })
        }}

      />
      {todoContent}
      <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
    </div>
  )
}

const TasksList = () => {
  const { todos } = useTodosContext()

  return (
    <>{todos.map(todo => (
      <Task todo={todo} key={todo.id} />
    ))}</>
  )
}

const TodosContext = createContext<{ todos: TToDo[] } | null>(null);

const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('Wrong todos context');
  }

  return context;
};

const DispatchContext = createContext<{ dispatch: (value: TReducerActions) => void } | null>(null);

const useDispatchContext = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error('Wrong dispatch context');
  }

  return context;
};

export const TodosPage = () => {
  const [todos, dispatch] = useReducer(reducer, defaultToDos);

  return (
    <TodosContext.Provider value={{ todos }}>
      <DispatchContext.Provider value={{ dispatch }} >
        <Container>
          <div className="flex flex-col">
            <AddNewTask />
            <TasksList />
          </div>
        </Container>
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
};


