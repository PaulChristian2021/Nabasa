import React from 'react'
import c from './MessageModal.module.css'

const MessageModal = (props) => {
    function closeModal(){
        props.setMessageModal(false)
    }
  return (
    <div onClick={closeModal} className={`${c.div} flex flexCenter height100 width100`}>
        <p className='whiteBg padding10'>{props.message}</p>
    </div>
  )
}

export default MessageModal