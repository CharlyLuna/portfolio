import { FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiAmazonaws, SiFlutter, SiHtml5, SiJavascript, SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si'

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
  }

]

export const SkillSection = () => {
  return (
    <div className='flex flex-col items-center my-10 bg-slate-800 py-8 gap-10'>
      <h1 className='text-3xl font-bold '>MY SKILLS</h1>
      <ul className='flex flex-wrap justify-center gap-4 px-4'>
        {SKILLS.map((skill) => (
          <li className=' w-fit h-fit md:hover:scale-125 md:hover:-translate-y-4 rounded-full bg-primary text-white p-3 transition-all duration-300' key={skill.name}>
            {skill.icon}
          </li>
        ))}
      </ul>
    </div>
  )
}
