import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"


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
                    <img src="/src/assets/login1.jpg" className="h-full w-full object-cover" />
                </aside>
            </div>
            <Form {...form}>
                <form action="#" className="grid md:grid-cols-2 min-h-screen w-full" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-center">
                        <Card className="w-full max-w-md">
                            <CardHeader>
                                <CardTitle className="text-2xl">Login</CardTitle>
                                <CardDescription>Enter your email and password to access your account.</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <FormField control={form.control} name="Email" render={({ field }) => (<FormItem>
                                        <FormControl>
                                            <Input {...field} placeholder="Email..." />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>)} />
                                </div>

                                <div className="space-y-2">
                                    <FormField control={form.control} name="Password" render={({ field }) => (<FormItem>
                                        <FormControl>
                                            <Input {...field} placeholder="Password..." />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>)} />
                                </div>
                            </CardContent>

                            <div className="col-span-6 flex flex-col items-center justify-center">
                                <Button type="submit" className="shrink-0 rounded-md border px-12 py-4 text-sm font-medium text-white mb-4">
                                    Login
                                </Button>
                                <div>
                                    <span className="mt-4 text-sm sm:mt-0">already have an account?</span>
                                    <Button className="text-gray-400 underline" variant="ghost" onClick={() => props.onSignUp()}>
                                        sign in</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </form>
            </Form>
        </section>
    )
}

export default Login;
