// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './ProjectsSlider.css'

// import required modules
import { Pagination } from 'swiper/modules'
import { PROJECTS } from '../../../utils/constants'
import { ProjectCard } from './ProjectCard'

export const ProjectsSlider = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        breakpoints={
          {
            600: {
              slidesPerView: 2
            },
            820: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 3
            },
            1380: {
              slidesPerView: 4
            }
          }
        }
        loop
        modules={[Pagination]}
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
