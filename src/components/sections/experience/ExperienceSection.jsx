import { MARKUPS } from '../../../utils/constants'
import { ExpMarkup } from './ExpMarkup'

export const ExperienceSection = () => {
  return (
    <section id='experience' className='mb-20'>
      <h1 className='flex justify-center pt-20 mb-8 text-3xl text-secondary font-bold'>MY EXPERIENCE</h1>
      <div className='flex justify-center items-center px-8 lg:px-28'>
        <ol className='relative border-s border-secondary'>
          {
            MARKUPS.map(markup => {
              if (markup.place === 'UDC') {
                return (
                  <ExpMarkup key={markup.title} containerStyle='ms-4' {...markup} />
                )
              }
              return <ExpMarkup key={markup.title} {...markup} />
            }
            )
          }
        </ol>

      </div>
    </section>
  )
}
