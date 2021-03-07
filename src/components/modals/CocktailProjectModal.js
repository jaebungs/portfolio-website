import React from 'react';
import Modal from 'react-modal';

const CocktailProjectModal = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null

    const handleCloseModal= () => {
        setIsOpen(false)
    }

    return (
        <Modal isOpen={isOpen} contentLabel='mymy cocktails modal' onRequestClose={()=>handleCloseModal()}>
            <h2>Mymy cocktails</h2>
            <button onClick={handleCloseModal}>Close</button>
        </Modal>
    )
}

export default CocktailProjectModal
