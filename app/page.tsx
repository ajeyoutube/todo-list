import CardTodo from '@/app/components/CardTodo';
import { fetchAllTodo } from './lib/data';



export default async function Home() {

  const todos = await fetchAllTodo();

  return (
    <div className="container mx-auto p-6">

  
      <h1 className='font-bold text-xl md:text-2xl text-center p-4'>
        Todo List
      </h1>
      <div className="bg-slate-300 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 justify-center p-4">


        {
          todos?.map((todo)=>(
           
            <CardTodo key={todo.id} todo={todo} />

          ))
        }
      

      </div>
    </div>
  );
}
