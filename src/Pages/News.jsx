import React from 'react'
import NewsCard from '../Components/NewsCard'

const News = () => {

  const arr = [1,2,3,4,5,6,7,8,9]

  return (
    <div className='container p-0 p-sm-5'>

      <div className="h3 upcoming mb-4 text-center">
        Latest News
      </div>


      <div className="row row-cols-1 row-cols-xl-3 g-2 g-sm-1">
        { <>
          {arr.map((i)=> (
              <div className="col">
                <NewsCard/>
              </div>
          ))}
          </>
        }
      </div>

    </div>
  )
}

export default News