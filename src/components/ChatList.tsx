import { ReactNode } from 'react'
import Image from "next/image"

import Search from '@assets/icons/search.svg'
import Loading from '@assets/icons/loading.svg'

interface IQuickListProps {
  isLoading: boolean,
  children: ReactNode
}

const QuickList = ({ isLoading, children }: IQuickListProps) => {
  return (
    <>
      <div className="relative w-full">
        <input type="text" className="border border-primary-3 rounded-md w-full px-5 py-1 text-sm placeholder:text-black" placeholder="Search" />
        <Image
          className="absolute right-5 top-2.5"
          src={Search}
          alt="search-icon"
          quality={100}
        />
      </div>
      <div className="flex-1 overflow-auto">
        {isLoading ?
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col items-center gap-3">
                <Image
                  className="animate-spin"
                  src={Loading}
                  alt="loading-icon"
                  quality={100}
                  priority
                />
                <strong className="text-primary-2">Loading Chats...</strong>
              </div>
            </div>
          :
            <div className="flex flex-col">
              { children }
            </div>
        }
      </div>
    </>
  )
}

export default QuickList