
const Help = () => {
    return (
        <>
            <section className="bg-slate-950">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lime-50 ">
                                You need help!


                                Don't worry, we are here to help you. In this help section you will find
                                n this help section you will find information on how to use our website, resolve common
                                common problems and get additional assistance.
                            </p>

                            <div className="mt-8">

                            </div>
                        </div>

                        <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12 bg-slate-800">
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only bg  " htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 ">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg  p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                </div>


                                <div>
                                    <label className="sr-only" htmlFor="message " >Message</label>

                                    <textarea
                                        className="w-full rounded-lg  p-3 text-sm"
                                        placeholder="Message"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="space-y-4 pt-10" >
                        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">¿Puedo asignar tareas a otras personas?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Sí, puedes asignar tareas a otros miembros de tu equipo. Simplemente selecciona la tarea, haz clic en "Asignar a" y
                             elige el nombre de la persona a la que deseas asignar la tarea.
                            </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">¿Cómo creo una nueva tarea?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Para crear una nueva tarea, haz clic en el botón "Añadir Tarea" en la esquina 
                                superior derecha de tu pantalla. Luego, completa los detalles de la tarea y guarda los cambios.
                            </p>
                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">¿Cómo puedo establecer una fecha límite para una tarea?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Al crear o editar una tarea, verás una opción para establecer una fecha de vencimiento
                            . Selecciona la fecha y la hora en que deseas que la tarea se complete.
                            </p>
                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">¿Puedo recibir recordatorios de tareas pendientes?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Sí, puedes configurar recordatorios para las tareas pendientes. Ve a la configuración de la 
                            tarea y activa las notificaciones de recordatorio.
                            </p>
                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                                consequuntur distinctio corporis earum similique!
                            </p>
                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                            >
                                <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                                consequuntur distinctio corporis earum similique!
                            </p>
                        </details>
                    </div>

                </div>


            </section>





        </>





    )
}

export default Help