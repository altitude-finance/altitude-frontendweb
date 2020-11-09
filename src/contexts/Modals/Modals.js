import React, { createContext, useCallback, useState } from 'react'

export const ModalsContext = createContext({
  onDismiss: () => {},
  onPresent: () => {}
})

const ModalsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const handlePresent = useCallback((modalContent) => {
    setContent(modalContent)
    setIsOpen(true)
  }, [setContent, setIsOpen])

  const handleDismiss = useCallback(() => {
    //setContent(undefined)
    setIsOpen(false)
  }, [setIsOpen])


  return (
    <ModalsContext.Provider value={{
      onDismiss: handleDismiss,
      onPresent: handlePresent
    }}>
      {children}
      {isOpen && (
        <>
          {React.isValidElement(content) && React.cloneElement(content, {
            isOpen,
            onDismiss: handleDismiss
          })}
        </>
      )}
    </ModalsContext.Provider>
  )
}

export default ModalsProvider