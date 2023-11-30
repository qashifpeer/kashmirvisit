import React from 'react'
import { CustomButton } from '.'
import { CATEGORIES } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat h-screen w-full z-10 pb-12">
    <div className='max-container padding-container relative top-16 sm:top-[20%] z-10'>
      <h1 className='bold-44 sm:bold-64 text-primary capitalize max-w-[36rem] dark:text-slate-900 transition-all duration-500'>  Explore the Kashmir with us    
      </h1>
      <p className='regular-16 mt-4 text-white lg:w-1/2'>
      Come and join us to explore Kashmir which is  nestled in the lap of the Himalayas, Kashmir captivates with its breathtaking landscapes—verdant valleys, serene lakes, and snow-capped peaks. A paradise on Earth, it mesmerizes with its rich culture, saffron fields, and the timeless beauty of Dal Lake.
      </p>
      <div className="mt-6">
        <CustomButton 
        btnType='button'
        title='Travel Plan'
        icon='/icons/plane.svg'
        containerStyles='btn_white_rounded dark:bg-slate-950 dark:text-secondary'
        textStyles =''
        />
      </div>
      <h4 className='text-secondary my-4 bold-22'>Explore the key points</h4>
      <ul className='flex flex-wrap gap-4'>
        {
          CATEGORIES.map((category)=>(
            <CategoryItem 
            key={category.title}
            title={category.title}
            icon={category.icon}
            />
            ))
        }

      </ul>
    </div>
  </section>
  )
}

type CategoryItem = {
    title : string;
    icon : string;
  }
  
  const CategoryItem = ({title, icon}: CategoryItem) =>{
    return(
      <Link href="/" className='bg-white dark:bg-slate-950 flex-center gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[-2px] transition-all duration-500 rounded-md'>
        <Image src={icon}  alt="icon" width={22} height={22} className='dark:bg-secondary dark:p-[3px] dark:rounded-full object-contain'/>
        <span className='capitalize regular-16 dark:text-slate-10'>{title}</span>
      </Link>
    )
  }

export default Hero