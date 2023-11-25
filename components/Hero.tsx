import React from 'react'
import { CustomButton } from '.'
import { CATEGORIES } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero.jpg')] bg-cover bg-no-repeat h-screen w-full z-10 pb-12">
    <div className='max-container padding-container relative top-28 sm:top-1/3 z-10'>
      <h1 className='bold-44 sm:bold-64 text-white capitalize max-w-[36rem]'>  Explore the world with us    
      </h1>
      <p className='regular-16 mt-6 text-white lg:w-1/2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptate ab dolore nam provident libero cum animi iusto facilis autem soluta id repellendus, sunt illum. Delectus animi dolorum magni eius!
      </p>
      <div className="mt-8">
        <CustomButton 
        btnType='button'
        title='Travel Plan'
        icon='/icons/plane.svg'
        containerStyles='btn_white_rounded'
        textStyles =''
        />
      </div>
      <h4 className='text-white my-4 bold-22'>Explore the key points</h4>
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
      <Link href="/" className='bg-white flex-center gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[-2px] transition-all duration-500 rounded-md'>
        <Image src={icon} alt="icon" width={22} height={22} className='regular-28'/>
        <span className='capitalize regular-16'>{title}</span>
      </Link>
    )
  }

export default Hero