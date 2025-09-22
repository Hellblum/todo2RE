import Button from "../../components/Button/Button";

const TodoFilters = ({ filter, setFilter}) => {
  return(
    <div>
      <Button onClick={() => setFilter('all')}>All</Button>
      <Button onClick={() => setFilter('active')}>Active</Button>
      <Button onClick={() => setFilter('completed')}>Completed</Button>
    </div>
  )
}

export default TodoFilters