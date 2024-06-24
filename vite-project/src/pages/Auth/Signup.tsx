import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface SignupProps {
    onSignIn: () => void
}

const Signup = (props: SignupProps) => {
    const form = useForm({
        //resolver:zod
        defaultValues: {
            FullName: "",
            Email: "",
            Password: "",
            PasswordConfirmation: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log("create project data", data);
    };
    return (
        <section className="">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="/src/assets/register1.jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-80" />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="#">
                            <span className="sr-only">Home</span>
                        </a>

                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full sm:size-20"
                                href="#">
                                <span className="sr-only">Home</span>
                            </a>

                            <h1 className="mt-2 text-2xl font-bold  sm:text-3xl md:text-4xl">
                                Join us at Tidy Day
                            </h1>

                            <p className="mt-4 leading-relaxed ">
                                register with us and join Tidy Day where your life will be easier, tidier and more fun in a way that you will not be disappointed. What are you waiting for, try and join Tidy Day. thank you for joining us.                            </p>
                        </div>

                        <Form {...form}>

                            <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="col-span-6">
                                    <FormField control={form.control}
                                        name="FullName"
                                        render={({ field }) => (<FormItem>
                                            <FormControl>
                                                <Input {...field}
                                                    className="block text-sm font-medium "
                                                    placeholder="Full Name..." />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)} />
                                </div>

                                <div className="col-span-6">
                                    <FormField control={form.control}
                                        name="Email"
                                        render={({ field }) => (<FormItem>
                                            <FormControl>
                                                <Input {...field}
                                                    className="block text-sm font-medium"
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

                                <div className="col-span-6 ">
                                    <FormField control={form.control}
                                        name="PasswordConfirmation"
                                        render={({ field }) => (<FormItem>
                                            <FormControl>
                                                <Input {...field}
                                                    className="block text-sm font-medium "
                                                    placeholder="Password Confirmation..." />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)} />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

                                        <span className="text-sm text-gray-400">
                                            I want to receive emails about events, product updates and company announcements.
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-400">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-gray-500 underline"> terms and conditions </a>
                                        and
                                        <a href="#" className="text-gray-500 underline"> privacy policy</a>.
                                    </p>
                                </div>

                                <div className="col-span-6 flex flex-col items-center justify-center">
                                    <Button type="submit" className="shrink-0 rounded-md border px-12 py-4 text-sm font-medium text-white mb-4">
                                        Register
                                    </Button>
                                    <div className="">
                                        <span className="text-sm">already have an account?</span>
                                        <Button className="text-gray-400 underline" variant="ghost" onClick={() => props.onSignIn()}>
                                            sign in</Button>
                                    </div>

                                </div>
                            </form>
                        </Form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Signup;
