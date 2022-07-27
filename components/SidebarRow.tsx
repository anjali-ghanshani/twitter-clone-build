import React, { SVGProps } from 'react'


interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='group  max-w-fit cursor-pointer flex items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100'> 
    {/* CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model. It is in the W3C's candidate recommendation stage. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size. */}
    {/* flex puts elements in row */}
        <Icon className='h-6 w-6'/>
        <p className='hidden group-hover:text-twitter md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow