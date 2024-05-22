import { ScrollArea } from "@radix-ui/react-scroll-area";

const ProjectDetails = () => {
    return (
        <>

            <div className="mt-5 lg:px-10">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w-[69%] pr-2">
                        <div className="text-gray-400 pb-10 w-full">
                            <h1 className="text-lg font-semibold pb-5">
                                Create Ecommerce Website Using React</h1>
                            <div className="space-y-5 pb-10">
                                <p className="w-full md:max-w-lg lg:max-w-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex">
                                    <p className="w-36">Project lead :</p>
                                    <p>TidyDay</p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Members :</p>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </ScrollArea>
                </div>
            </div>

        </>
    )
}

export default ProjectDetails;