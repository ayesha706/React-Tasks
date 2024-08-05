import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Gallery2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='w-[70%]'>
      <Carousel responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}>
        {/* item 1 */}
        <div className='gap-6 columns-4 p-5' >
          <div>
          <img
           className='w-full mb-5 aspect-video rounded-lg  object-cover'
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          {/* <div>
          <img
        className='w-full mb-5 aspect-square  rounded-lg'
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          <div>
            <img
             className='w-full mb-5 aspect-video rounded-lg'
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
            />
          </div> */}
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        {/* item 2 */}
        <div className='gap-6 columns-4 p-5' >
          <div>
          <img
           className='w-full mb-5 aspect-video rounded-lg  object-cover'
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          {/* <div>
          <img
        className='w-full mb-5 aspect-square  rounded-lg'
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          <div>
            <img
             className='w-full mb-5 aspect-video rounded-lg'
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
            />
          </div> */}
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        {/* item 3 */}
        <div className='gap-6 columns-4 p-5' >
          <div>
          <img
           className='w-full mb-5 aspect-video rounded-lg  object-cover'
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          {/* <div>
          <img
        className='w-full mb-5 aspect-square  rounded-lg'
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
            alt="gallery-photo"
          />
        </div>
          <div>
            <img
             className='w-full mb-5 aspect-video rounded-lg'
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
            />
          </div> */}
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className='w-full mb-5 aspect-square rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className='w-full mb-5 aspect-video rounded-lg object-cover'
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Gallery2