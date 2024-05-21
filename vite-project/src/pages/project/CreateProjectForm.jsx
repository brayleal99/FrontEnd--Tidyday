import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CreateProjectForm = () => {
  const form=useForm({
    //resolver:zod
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tasgs:["javascript", "react"]
    }
  })

  const onSubmit=(data) => {
    console.log("create project data",data);
  }
  return (
    <div>

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
            name="name"
            render={({ field }) => <FormItem>
              <FormControl>
                <Input {...field}
                  type="" text
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="project name..." />
              </FormControl>
              <FormMessage/>
            </FormItem>} />
        </form>

      </Form>

    </div>
  )
}

export default CreateProjectForm;
