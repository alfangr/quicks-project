import { ReactNode } from 'react'

interface IQuickWrapper {
  children: ReactNode
}

export default function QuickWrapper({
  children
}: IQuickWrapper) {
  return (
    <div className="relative">
      <section className="flex flex-col fixed bottom-0 right-0 m-4 gap-4">
        { children }
      </section>
    </div>
  )
}