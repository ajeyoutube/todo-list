'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import FormEdit from "./FormEdit"
import { Todo } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const DialogEdit = ({todo}:{todo: Todo}) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeDialog = ()=>{
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Editar</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tarea</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <FormEdit todo={todo} fClose={closeDialog} />
            </DialogContent>
        </Dialog>

    )
}

export default DialogEdit