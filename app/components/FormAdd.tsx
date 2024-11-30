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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { formAddSchema } from "@/lib/zod"
import { AddTask } from "../lib/actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"



const FormAdd = () => {
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formAddSchema>>({
    resolver: zodResolver(formAddSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formAddSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    await AddTask(values)
    router.push('/')

    toast({
      title: "Tarea agregada",
      className: 'bg-green-600'
    })

  }
  return (

    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-[80%] md:w-[60%] xl:w-[50%] mx-auto ">
        <CardHeader>
          <CardTitle>
            Agregar nueva tarea
          </CardTitle>
        </CardHeader>
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
              <Button type="submit">Agregar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>



  )
}

export default FormAdd