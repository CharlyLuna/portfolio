import { UIProvider } from '../context/UIProvider'

export const Providers = ({ children }) => {
  return (
    <UIProvider>
      {children}
    </UIProvider>
  )
}
