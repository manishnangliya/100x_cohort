import './App.css'

function App() {

  return (
    <>
      { }
      {/* useses of flex in TW */}
      {/* <div className='flex justify-between'>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-pink-500'>Hello</div>
        <div className='bg-green-500'>Hello</div>
        <div className='bg-blue-500'>Hello</div>
        <div className='bg-orange-500'>Hello</div>
      </div> */}

      {/* useses of grid in TW with equal columns */}
      {/* <div className='grid grid-cols-3'>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-pink-500'>Hello</div>
        <div className='bg-green-500'>Hello</div>
        <div className='bg-blue-500'>Hello</div>
        <div className='bg-orange-500'>Hello</div>
      </div> */}

      {/* using grid in TW for unequal columns 40% 40% 20%*/}
      {/* <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>Hello</div>
        <div className='bg-pink-500 col-span-4'>Hello</div>
        <div className='bg-green-500 col-span-2'>Hello</div>
      </div> */}

      {/* using flex in TW for unequal columns 40% 40% 20%*/}
      {/* <div className='flex'>
        <div className='bg-red-500 w-[40%]'>Hello</div>
        <div className='bg-pink-500 w-[40%]'>Hello</div>
        <div className='bg-green-500 w-[20%]'>Hello</div>
      </div> */}

      {/* responsive using TW changing color if screen size is above md to blue */}
      {/* <div className='bg-red-500 md:bg-blue-500'>hey</div> */}

      {/* responsive using TW*/}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 ' >
        <div className='bg-red-500 '>Hello</div>
        <div className='bg-pink-500 '>Hello</div>
        <div className='bg-green-500 '>Hello</div>
      </div>

    </>
  )
}

export default App
