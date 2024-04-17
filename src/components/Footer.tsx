
const Footer = () => {


    return (
        // &copy; {new Date().getFullYear()} React Jobs,&nbsp;Inc.
        <footer className="bg-indigo-700 border-b border-indigo-500">
                <div className="max-w-2xl mx-auto pb-0 text-center text-white py-10 text-0.5xl">
                        <p> &copy; {new Date().getFullYear()} React Jobs,&nbsp;Inc. </p>
                </div>
        </footer>

    )
}

export default Footer