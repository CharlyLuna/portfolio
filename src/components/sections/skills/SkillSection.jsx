import { FaGitSquare } from 'react-icons/fa'
import { FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiAmazonaws, SiFlutter, SiHtml5, SiJavascript, SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { CERTIFICATIONS } from '../../../utils/constants'

const SKILLS = [
  {
    name: 'React',
    icon: <FaReact size={25} />
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={25} />
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={25} />
  },

  {
    name: 'Node.js',
    icon: <FaNodeJs size={25} />
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={25} />
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={25} />
  },
  {
    name: 'AWS',
    icon: <SiAmazonaws size={25} />
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 size={25} />
  },
  {
    name: 'Flutter',
    icon: <SiFlutter size={25} />
  },
  {
    name: 'Prisma',
    icon: <SiPrisma size={25} />
  },
  {
    name: 'Git',
    icon: <FaGitSquare size={25} />
  }

]

export const SkillSection = () => {
  return (
    <section id='skills' className='flex flex-col items-center gap-8 md:px-8 lg:px-28'>
      <h1 className='text-3xl font-bold pt-20 text-secondary'>MY SKILLS</h1>
      <div className='bg-slate-800 p-8 md:rounded-md shadow-xl w-full'>
        <p className='text-xl font-bold mb-8 text-center'>Technologies I feel comfortable with</p>
        <ul className='flex flex-wrap justify-center gap-4 py-1'>
          {SKILLS.map((skill) => (
            <li className='group relative w-fit h-fit md:hover:scale-125 md:hover:-translate-y-4 rounded-full bg-primary text-white p-3 transition-all duration-200' key={skill.name}>
              {skill.icon}
              <div className='opacity-0 md:group-hover:opacity-100 absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary h-[7px] w-[7px] rounded-full transition-opacity duration-300 ease-in-out' />
            </li>
          ))}
        </ul>
      </div>
      <div className='p-8'>
        <p className='text-xl font-bold mb-8 text-secondary text-center'>My certifications and badges</p>
        <div className='flex flex-wrap justify-center mb-2'>
          {
          CERTIFICATIONS.map(cert => (
            <a className='md:hover:scale-110 transition-all duration-300' href={cert.link} key={cert.title} target='_blank' rel='noreferrer'>
              <img src={cert.image} className='h-[150px] w-[150px]' />
            </a>
          ))
        }
        </div>
        <div className='w-full bg-secondary h-2 rounded' />
        <p className='text-secondary text-center mt-2'>Click on each badge to watch it!</p>
      </div>
    </section>
  )
}
