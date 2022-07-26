import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
    BookmarkIcon,
    } from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='flex flex-col'>
        <img className='h-10 w-10' src='https://ra.ac.ae/wp-content/uploads/2020/01/logo-twitter-icon-symbol-0.png' alt=""/>
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} title="Lists" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar