import Image from "next/image"
import DarkModeToggle from "@/components/DarkModeToggle"
import MyModal from "@/components/ModalTemplateKit"
import FigmaCodePlugin from "@/components/FigmaCodePlugin"

const person = [
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
    { imageUrl: 'https://www.kennedy-center.org/link/20bdb6ff187b4d69ba1651f13071a235.aspx', name: 'adam sandler', email: 'adamsandler123@gmail.com' },
]

export default function Page() {
    return (
        <div>
            <div className="columns-3 px-4 mx-auto gap-8 space-y-4">
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right rounded-lg border-4 border-red-600">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right">Hello</div>
                <div className="w-20 md:w-32 lg:w-48 h-20 dark:bg-blue-800 dark:text-cyan-100 bg-amber-300 text-center sm:text-left md:max-lg:text-right hidden">Hello</div>
            </div>

            <div className="flex pt-4">
                <div className="grow w-14 h-14 bg-teal-300 md:max-lg:grow-0">
                    01
                </div>
                <div className="grow-0 w-14 h-14 bg-orange-400 hover:grow">
                    02
                </div>
                <div className="grow w-14 h-14 bg-teal-300">
                    03
                </div>
            </div>
            <div className="flex pt-4 space-x-4 w-1/2 md:min-w-3/4 justify-center">
                <div className="flex-1 w-14 h-16 bg-teal-300 md:max-lg:grow-0 font-sans text-xl font-bold text-center text-pink-800 flex justify-center items-center">
                    01
                </div>
                <div className="shrink w-32 h-16 bg-orange-400">
                    02
                </div>
                <div className="flex-1 w-14 h-16 bg-teal-300">
                    03
                </div>
            </div>

             <ul>
            {
                person.map((people, index) => (
                    <li key={index} className="flex py-4 first:pt-10 even:bg-midnight hover:bg-silver">
                        <Image className="rounded-full" alt="people img" src={people.imageUrl} width={50} height={50} />
                        <div className="ml-3">
                            <p className="font-medium">{people.name}</p>
                            <p>{people.email}</p>
                        </div>
                    </li>
                ))
            }
            </ul>

            <form className="group hover:bg-bubble-gum">
                <span className="group-hover:text-silver">Username</span>
                <input
                    type="text"
                    className="w-full px-3 py-2 bg-midnight placeholder:italic"
                    required
                    placeholder="Search everything..."
                />
            </form>

            <DarkModeToggle />
            <MyModal />
            <FigmaCodePlugin />
        </div>
    )
}