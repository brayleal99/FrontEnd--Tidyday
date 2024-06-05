import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface LogInProps {
    onSignUp: () => void
}

const Login = (props: LogInProps) => {
    const form = useForm({
        //resolver:zod
        defaultValues: {
            Email: "",
            Password: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log("create project data", data);
    };
    return (
        <section >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative flex h-32 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
                            Welcome to Squid
                        </h1>

                        <p className="mt-4 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>

                        <Form {...form}>
                            <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="col-span-6 ">
                                    <FormField control={form.control}
                                        name="Email"
                                        render={({ field }) => (<FormItem>
                                            <FormControl>
                                                <Input {...field}
                                                    className="block text-sm font-medium "
                                                    placeholder="Email..." />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)} />
                                </div>

                                <div className="col-span-6 ">
                                    <FormField control={form.control}
                                        name="Password"
                                        render={({ field }) => (<FormItem>
                                            <FormControl>
                                                <Input {...field}
                                                    className="block text-sm font-medium "
                                                    placeholder="Password..." />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)} />
                                </div>
                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <Button type="submit" className="w-full mt-5">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Form>
                        <div>
                            <span>already have account?</span>p
                            <Button variant="ghost" onClick={() => props.onSignUp()}>
                                sign in</Button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Login
