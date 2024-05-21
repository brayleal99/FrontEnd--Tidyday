import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { tags } from "../ProjectList/ProjectList";

const CreateProjectForm = () => {
	const form = useForm({
		//resolver:zod
		defaultValues: {
			name: "",
			description: "",
			category: "",
			tasgs: ["javascript", "react"]
		}
	})

	const onSubmit = (data) => {
		console.log("create project data", data);
	}
	return (
		<div>

			<Form {...form}>

				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField control={form.control}
						name="name"
						render={({ field }) => <FormItem>
							<FormControl>
								<Input {...field}
									type="" text
									className="border w-full border-gray-700 py-5 px-5"
									placeholder="project name..." />
							</FormControl>
							<FormMessage />
						</FormItem>}
					/>

					<FormField control={form.control}
						name="description"
						render={({ field }) => <FormItem>
							<FormControl>
								<Input {...field}
									type="" text
									className="border w-full border-gray-700 py-5 px-5"
									placeholder="project description ..." />
							</FormControl>
							<FormMessage />
						</FormItem>}
					/>
					<FormField control={form.control}
						name="Category"
						render={({ field }) => <FormItem>
							<FormControl>
								<Select defaultValue="fullstack"
									value={field.value}
									onValueChange={(value) => {
										field.onChange(value)
									}}
								//className="border w-full border-gray-700 py-5 px-5"
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Category" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="fullstack">Full Stack</SelectItem>
										<SelectItem value="frontend">Frontend</SelectItem>
										<SelectItem value="backend">Backend</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>}
					/>
					<FormField control={form.control}
						name="Tags"
						render={({ field }) => <FormItem>
							<FormControl>
								<Select
									value={field.value}
									onValueChange={(value) => {
										field.onChange(value)
									}}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Tags" />
									</SelectTrigger>
									<SelectContent>
										{tags.map((item) => (<SelectItem key={item} value={item}>{item}</SelectItem>))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>}
					/>
					<DialogClose>
						{false ? <div><p> you can only 3 project whit free plan,
							please upgrade your paln</p></div> : <Button type="submit" className="w-full mt-5">
							Create Project
						</Button>}
					</DialogClose>
				</form>

			</Form>

		</div>
	)
}

export default CreateProjectForm;
