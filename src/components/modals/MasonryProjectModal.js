import React from 'react'
import Modal from 'react-modal';

const MasonryProjectModal = ({ isOpen, setIsOpen, code }) => {
    if (!isOpen) return null

    const handleCloseModal= () => {
        setIsOpen(false)
    }
    const handleCodeOnClick = () => {
        window.open(code, '_blank')
    }

    return (
        <Modal isOpen={isOpen} contentLabel='Masonry generator modal' onRequestClose={()=>handleCloseModal()}>
            <h2>Masonry Generator</h2>
            <button onClick={handleCodeOnClick}>CODE</button>
            <button onClick={handleCloseModal}>Close</button>
        </Modal>
    )
}

export default MasonryProjectModal
