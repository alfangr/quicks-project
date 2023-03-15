import Image from "next/image"

import RedDot from '@assets/icons/red-dot.svg'

interface IChatProps {
  chatList: any,
  onClick: () => void
}

const Chat = ({ chatList, onClick }: IChatProps) => {
  return (
    <button type="button" className="flex flex-col w-full border-b last:border-none border-primary-3 py-[22px] bg-transparent hover:bg-[#2F80ED1A]" onClick={onClick}>
      <div className="flex flex-row gap-7 w-full">
        <div className="flex flex-col">
          {chatList.type == 'group' ?
            <>
              <div className="z-10 translate-x-4 bg-primary rounded-full p-2.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" fill="white"/>
                </svg>
              </div>
              <div className="z-0 -translate-y-full bg-primary-4 rounded-full p-2.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" fill="#0000008A"/>
                </svg>
              </div>
            </>
            :
            <div className="flex justify-center items-center translate-x-2 bg-primary rounded-full p-1 w-7 h-7">
              <strong className="text-white">{chatList.subject.charAt(0)}</strong>
            </div>
          }
        </div>
        <div className="flex flex-col w-full text-sm">
          <div className="flex flex-row gap-4">
            <div className="text-primary text-left font-bold">{chatList.subject}</div>
            <div className="text-primary-2 whitespace-nowrap">{chatList.datetime}</div>
          </div>
          {chatList.type == 'group' && <strong className="text-left">{chatList.last.person} :</strong>}
          <div className="flex flex-row items-center justify-between">
            <p className="text-primary-2 text-left">{chatList.last.message}</p>
            {!chatList.isRead &&
              <Image
                className="animate-spin"
                src={RedDot}
                alt="reddot-icon"
                quality={100}
              />
            }
          </div>
        </div>
      </div>
    </button>
  )
}

export default Chat