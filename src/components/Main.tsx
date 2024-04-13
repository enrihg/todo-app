type ComponentProps = {
    children?: React.ReactNode;
}

function Main({ children }: ComponentProps) {

    return (
        <main className='max-w-[540px] mx-auto font-plus-jakarta-sans px-6 w-screen h-screen bg-red-40'>
            <div className='bg-cover bg-mobile-light sm:bg-desktop-light dark:bg-mobile-dark sm:dark:bg-desktop-dark h-[35%] w-screen z-[-1] absolute left-0 top-0'></div>
            {children}
        </main>
    )
}

export default Main