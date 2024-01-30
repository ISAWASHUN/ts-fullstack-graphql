import './App.css'
import { useTodosQuery } from './__generated__/graphql'

function App() {
  const {data, loading, error} = useTodosQuery()
  return (
    <>
      {data?.getTodos?.todos?.map((item) => (
        <div key={item?.id}>
          {item?.id}: {item?.title}
        </div>
      ))}
    </>
  )
}

export default App
