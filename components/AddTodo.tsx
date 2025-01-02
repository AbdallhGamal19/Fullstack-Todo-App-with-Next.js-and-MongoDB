import { addTodoAction } from "../actions/todo.action";

import TodoForm from "./TodoForm";

const AddTodo = ({ userId }: { userId: string | null }) => {
  return (
    <TodoForm
      userId={userId}
      action={addTodoAction}
      dialogTitle="Add new Todo"
      icon="Add Todo"
    />
  );
};

export default AddTodo;
{
  /**
  "use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  todoDefaultValues,
  todoFormSchema,
  todoFormValues,
} from "../validation/index";
import { addTodoAction } from "../actions/todo.action";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./ui/Spinner";

const AddTodoForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<todoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: todoDefaultValues,
    mode: "onChange",
  });
  //HANDELARS
  const onSubmit = async (data: todoFormValues) => {
    setLoading(true);
    const { title, body, completed } = data;
    await addTodoAction({ title, body, completed });
    setLoading(false);
    setOpen(false);
  };

  return (
    // onOpenChange={setOpen} I do not make anything in set Open because Dialog understand that
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="block ml-auto" variant="default">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Add New Todo</DialogTitle>
          <DialogDescription>
            Make changes to your Todos. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Wright Todo" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Goooo"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          name={field.name}
                          ref={field.ref}
                        />
                      </FormControl>
                      <FormLabel> completed</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">{loading ? <Spinner /> : ""}Save</Button>
            </form>
          </Form>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoForm;

  */
}
