function Main({ children }): JSX.Element {
    return (
        <main className=' font-plus-jakarta-sans divide-y dark:divide-dark-900 px-6 w-screen h-screen bg-red-40'>
            <div className=' bg-mobile-light dark:bg-mobile-dark h-[200px] w-screen z-[-1] mx-[-24px] absolute'></div>
            {children}
        </main>
    )
}

export default Main