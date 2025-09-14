import React, { useRef, useEffect } from 'react'
const Modal = ({ children, open, onClose}) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => {
      if (onClose) onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  useEffect(() => {
    if (!dialogRef.current) return
    if (open && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
    if (!open && dialogRef.current.open) {
      dialogRef.current.close()
    }
  }, [ open ])

  return(
    <>
      <dialog ref={dialogRef}>
        {children}
      </dialog>
    </>
  )
}

export default Modal 