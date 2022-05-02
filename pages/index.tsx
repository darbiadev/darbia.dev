import type {NextPage} from 'next'
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
            <main>
                <h1 className="font-mono text-xl code text-stone-300">
                    <p>Welcome to Darbia</p>
                    <p>Check us out on <Link href="https://github.com/darbiadev"><a
                        className="text-indigo-700">github.com/darbiadev</a></Link></p>
                    <p>Read the docs at <Link href="https://docs.darbia.dev"><a
                        className="text-gray-600">docs.darbia.dev</a></Link></p>
                </h1>
            </main>
        </div>
    )
}

export default Home
