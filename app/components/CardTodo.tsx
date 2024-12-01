
import { Checkbox } from "@/components/ui/checkbox"

import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Todo } from '@prisma/client'
import DialogEdit from "./DialogEdit"
import DialogDelete from "./DialogDelete"

const CardTodo = ({ todo }: { todo: Todo }) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          {
            todo.title
          }
        </CardTitle>

      </CardHeader>
      <CardContent className="min-h-32">
        <p className="text-justify">
          {
            todo.description
          }
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogEdit todo={todo} />
        <DialogDelete id={todo.id} />
        <Checkbox checked={todo.finished} disabled />
      </CardFooter>
    </Card>
  )
}

export default CardTodo