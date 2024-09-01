import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen right-[50%] bg-gray-100 flex items-center  justify-between">
    {/* First card */}
    <div className="sm:max-w-xl sm:mx-auto flex justify-center items-center">
      <div className="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8">
        <div className="h-48 overflow-visible w-60 bg-gray-300 rounded-3xl"></div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <div className="h-6 bg-gray-200 rounded-full w-32"></div>
            <div className="bg-yellow-400 font-bold rounded-xl p-2 w-12 h-8"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded-full w-20 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-full w-24"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16 mt-auto"></div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Loading