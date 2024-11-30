"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { formAddSchema } from "@/lib/zod"
import { EdiTask } from "../lib/actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Todo } from "@prisma/client"
import { Checkbox } from "@/components/ui/checkbox"



const FormEdit = ({ todo, fClose }: { todo: Todo, fClose: ()=> void }) => {
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formAddSchema>>({
    resolver: zodResolver(formAddSchema),
    defaultValues: {
      title: todo.title,
      description: todo.description,
      finished: todo.finished
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formAddSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //  console.log(values)

    await EdiTask(values, todo.id)
    router.refresh()
    fClose()
    toast({
      title: "Tarea Editada",
      className: 'bg-green-600'
    })

  }
  return (

    <div className="flex items-center justify-center ">
      <Card className="w-[80%]  ">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa el título" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Decripción</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Agrega la descripción" className="resize-none"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="finished"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />                      
                    </FormControl>
                        <FormLabel className="ml-2">Terminada ?</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Agregar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>



  )
}

export default FormEdit