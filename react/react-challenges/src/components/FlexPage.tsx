import styles from '../styles/flexPage.module.css'

export default function FlexPage() {
    return (
        <div>
            {/* Header */}
            <header className="w-full bg-cyan-300 text-white mb-2 h-16 flex items-center justify-center">
                <h1 className="text-2xl font-semibold">Header</h1>
            </header>

            <div className="flex gap-1">
                {/* Hero & Sidebar */}
                <div className="flex flex-col w-1/3 gap-2">
                    {/* Hero */}
                    <section className="bg-purple-200 text-white h-48 flex items-start justify-center">
                        <h1 className="text-2xl font-semibold mt-3">Hero</h1>
                    </section>

                    {/* Sidebar */}
                    <nav className={`text-white h-64 flex items-start justify-center ${styles.sidebar}`}>
                        <h1 className="text-2xl font-semibold mt-3">Sidebar</h1>
                    </nav>
                </div>

                <div className="flex flex-col w-2/3 gap-2">
                    {/* Main Content */}
                    <section className="bg-yellow-400 text-white h-80 flex flex-col items-center justify-start text-center p-4 overflow-hidden">
                        <h1 className="text-2xl font-semibold">Main Content</h1>
                        <p className="mt-3 font-medium">Just to make sure the main content has some content</p>
                    </section>

                    {/* Extra Content */}
                    <article className="bg-gray-400 text-white h-32 flex items-start justify-center overflow-hidden">
                        <h1 className="text-2xl font-medium mt-3">Extra Content</h1>
                    </article>
                </div>
            </div>

            {/* Related Images & Related Posts */}
            <div className="flex gap-1 mt-2">
                <section className={`lg:w-full md:w-3/4 flex-1 text-white h-28 flex items-start justify-center ${styles.relatedImages}`}>
                    <h1 className="text-2xl font-medium mt-3">Related Images</h1>
                </section>
                <section className="lg:w-1/5 md:w-1/4 bg-pink-200 text-white h-28 flex items-center justify-start flex-col p-2">
                    <h1 className="text-2xl font-medium mt-1">Related</h1>
                    <h1 className="text-2xl font-medium">Posts</h1>
                </section>
            </div>

            {/* Footer */}
            <footer className={`${styles.footer} w-full text-white h-20 flex items-center justify-center mt-2`}>
                <h1 className="text-2xl font-medium">Footer</h1>
            </footer>
        </div>
    );
}
