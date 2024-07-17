// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './ProjectsSlider.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { PROJECTS } from '../../../utils/constants'
import { ProjectCard } from './ProjectCard'

export const ProjectsSlider = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        breakpoints={
          {
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1420: {
              slidesPerView: 4
            }
          }
        }
        navigation
        loop
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {
          PROJECTS.map(project => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  )
}
