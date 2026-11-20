import React from 'react'

const Topic = ({topic}) => {
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
        <header className="flex justify-between items-center w-full lg:w-[80%]">
           <div className="flex justify-start items-start flex-col gap-1">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
            {topic.name}
          </h1>
          <h3 className="text-sm md:text-md xl:text-lg font-semibold text-gray-200 dark:text-gray-600">
            View all your notes
          </h3>
        </div>
        </header>
    </main>
  )
}

export default Topic
