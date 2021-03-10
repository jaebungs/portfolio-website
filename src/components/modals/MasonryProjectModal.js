import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '5rem',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50vw',
    maxHeight: '80vh',
    fontSize: '1.5rem',
    overflow: 'auto',
  },
};

const MasonryProjectModal = ({isOpen, setIsOpen, code}) => {
  if (!isOpen) return null;

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCodeOnClick = () => {
    window.open(code, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Masonry generator modal"
      style={customStyles}
      onRequestClose={() => handleCloseModal()}
    >
      <div className="modal__header">
        <h2 className="modal__title pink-typography">Masonry Generator</h2>
        <button className="modal__close-button" onClick={handleCloseModal}>
          Close
        </button>
      </div>

      <button className="modal__code-button--pink" onClick={handleCodeOnClick}>
        VIEW CODE
      </button>

      <h3 className="modal__subtitle pink-typography">Introduction</h3>
      <p className="modal__p">
        It is . Upload images. You can have your Masonry gallery website!
      </p>

      <h3 className="modal__subtitle pink-typography">The goal</h3>
        <p className="modal__p">Create a clean masonry gallery app that can be managed easily.</p>

      <h3 className="modal__subtitle pink-typography">Development Process</h3>
      <ol className="modal__ol">
          <li>Ask any requirements and clarify them.</li>
          <li>Think about design, build process, and brainstorm other app features.</li>
          <li>Choose tools.</li>
          <li>Test and present.</li>
          <li>Changes based on the feedback</li>
          <li>Back and forth few times or fix on the spot</li>
          <li>Check responsive.</li>
      </ol>

      <h3 className="modal__subtitle pink-typography">Problems Encountered</h3>
      <div className="modal__grid-table">
        <p className="table__header pink-typography">Problems</p>
        <p className="table__header pink-typography">Solution / Learning outcome</p>

        <p className="table__problem">What tools to use storing images?</p>
        <p className="table__solution">
          Google drive came up in my head first, then imgur and other storage websites. It is
          possible, however, it was not easy and user-friendly to save and retrieve images from free
          cloud drives.<br></br>After long long hours of research and trial, I found Firebase!
        </p>
        
        <p className="table__problem">Masonry… but with what and how?</p>
        <p className="table__solution">
          Should I use Grid? Or Flex? Set specific height on nth pictures? But each image should
          keep its ratio.<br></br> decided to use the grid to practice and display in left to right
          order while keeping each image’s ratio.<br></br>It was not as easy as I was expecting.
          <br></br>
          One grid div that has a maximum 4 column (280px) with 1px of many rows.<br></br>
          Calculate image width and height during upload and give appropriate span. This way we can
          keep its ratio.
        </p>

        <p className="table__problem">Restricting admin page.</p>
        <p className="table__solution">
          Learned private routing.<br></br>
          It was an interesting concept. I would like to dive more into authentication and
          authorization.
        </p>

        <p className="table__problem">
          Structuring data flow.<br></br>Pictures are stored in Storage. - it was obvious.<br></br>
          Should I have one collection contains image data and image orders? Or two separate
          collections?<br></br>
        </p>
        <p className="table__solution">
          This took quite a long time to structure and implement. I could not decide where and how
          to start.<br></br>The good thing was I did not have to make CRUD APIs, but setting up
          firebase and learning syntax took some time.
          <br></br>
          Instead of having a nested image order (array), I made two separate collections because it
          was easier to manipulate and safer from accidentally deleting it or messing it up. (yes, I
          was not feeling comfortable at this time.)<br></br>
          As a result, I was having 3 different collections to handle when uploading and deleting
          images.<br></br>- When uploading, first, add images to Storage. Second, get the url with
          await function and create an object that contains other metadata. Third, update image
          order.<br></br>- When deleting, instead of deleeting by indexes in the Firestore, make
          state changes then upload the state.
        </p>

        <p className="table__problem">Let’s use a library next time. Drag and Drop function.</p>
        <p className="table__solution">
          I wanted to build everything from scratch, so I used HTML drag and drop API.<br></br>
          It felt good after many obstacles sorting, updating and re-rendering images by order.
        </p>

        <p className="table__problem">
          Poor CSS structuring.<br></br>I got lost after I came back weeks later...
        </p>
        <p className="table__solution">
          Learn BEM, SMACSS, OOCSS.<br></br>I read articles, but I need to practice more.
        </p>
        <p className="table__problem"></p>
        <p className="table__solution"></p>
      </div>

      <h3 className="modal__subtitle pink-typography">Other learning outcomes</h3>
      <ol>
        <li>
          Firebase provides an authentication service that users can easily implement on their
          choice of sign-in methods.
        </li>
        <li></li>
      </ol>
    </Modal>
  );
};

export default MasonryProjectModal;
