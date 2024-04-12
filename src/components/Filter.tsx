type ComponentProps = {
    showAll: () => void,
    showActive: () => void,
    showCompleted: () => void
}

function Filter({ showAll, showActive, showCompleted }: ComponentProps): JSX.Element {

    return (
        <form action="#">
            <fieldset className="flex items-center justify-center gap-[18px] h-[52px] mt-4 py-4 px-5 rounded-[5px] bg-white dark:bg-dark-800 font-bold text-[14px] text-light-400">
                <div>
                    <input onInput={showAll} type="radio" id="all" name="filter" className="peer sr-only" />
                    <label htmlFor="all" className="hover:cursor-pointer hover:text-light-500 dark:hover:text-white checked:text-red-600 peer-checked:text-active-dark">All</label>
                </div>
                <div>
                    <input onInput={showActive} type="radio" id="active" name="filter" className="peer sr-only" />
                    <label htmlFor="active" className="hover:cursor-pointer hover:text-light-500 dark:hover:text-white peer-checked:text-active-dark">Active</label>
                </div>
                <div>
                    <input onInput={showCompleted} type="radio" id="completed" name="filter" className="peer sr-only" />
                    <label htmlFor="completed" className="hover:cursor-pointer hover:text-light-500 dark:hover:text-white peer-checked:text-active-dark">Completed</label>
                </div>
            </fieldset>
        </form>
    )
}

export default Filter