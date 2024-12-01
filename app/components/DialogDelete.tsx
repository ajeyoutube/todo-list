'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DeleteTask } from "../lib/actions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"


const DialogDelete = ({ id }: { id: string }) => {

    const { toast } = useToast()
    const router = useRouter()
    const deleteT = async () => {
        await DeleteTask(id)
        toast({
            title: "Registro eliminado",
            className: "bg-green-600"
        })

        router.refresh()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-red-500">Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Estás seguro?</DialogTitle>
                    <DialogDescription>
                        <Button onClick={deleteT} className="mt-8">Aceptar</Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default DialogDelete