import { createContext, useState } from 'react'

export const UIContext = createContext()

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <UIContext.Provider value={{ openSidebar, closeSidebar, isSidebarOpen }}>
      {children}
    </UIContext.Provider>
  )
}
