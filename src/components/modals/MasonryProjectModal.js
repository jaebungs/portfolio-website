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
        Upload images. Then, there will be a Masonry gallery website!<br></br>A friend who has a
        Shopify website wanted to have a photo gallery function to display some of her works.
      </p>

      <h3 className="modal__subtitle pink-typography">The goal</h3>
      <p className="modal__p">Create a clean UI masonry gallery that can be managed easily.</p>

      <h3 className="modal__subtitle pink-typography">Development Process</h3>
      <ol className="modal__ol">
        <li>Gather requirements.</li>
        <li>Brainstorm design, build process, and other app features.</li>
        <li>Choose tools.</li>
        <li>Make, test and present.</li>
        <li>Change based on the feedback. Back and forth a few times.</li>
        <li>Check responsive.</li>
      </ol>

      <h3 className="modal__subtitle pink-typography">Problems Encountered</h3>
      <div className="modal__grid-table">
        <p className="table__header pink-typography">Problems</p>
        <p className="table__header pink-typography">Solution / Learning outcome</p>

        <p className="table__problem">What tool to use storing images?</p>
        <p className="table__solution">
          Google drive came up in my head first, then imgur and other storage websites. I could use
          those, however, it was not easy and user-friendly to save and retrieve images from free
          cloud services.<br></br>After long hours of research, trial and fail, I found Firebase!
        </p>

        <p className="table__problem">Masonry… but with what and how?</p>
        <p className="table__solution">
          Should I use Grid? Or Flex? Set specific height on nth pictures? But each image should
          keep its ratio.<br></br>I decided to use the grid for practice and display it in left to
          right order while keeping each image’s ratio.<br></br>It was not as easy as I was
          expecting. Actually, I struggled and I think I made it too complicated, but this is the
          solution I came up with at that time.
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
          Structuring data flow.<br></br>
          Should I have one collection contains image data and image orders? Or two separate
          collections?<br></br>
        </p>
        <p className="table__solution">
          This took quite a long time to structure and implement. I could not decide where and how
          to start.<br></br>The good thing was I did not have to make CRUD APIs, but setting up
          firebase and learning syntax took some time.
          <br></br>
          Instead of having an image order array in one document with image data, I made two
          separate collections because it was easy to manipulate and visualize. <br></br>- When
          uploading, first, add images to Storage. Second, get the url with await function and
          create an object that contains other metadata. Third, update image order.<br></br>
          Data flow.<br></br>
          When uploading, add images to the Storage. Once images are saved in the Storage, get the
          URL and create an object that contains other metadata. Third, update image order.<br></br>
          When deleting, instead of deleting by indexes in the Firestore, make state changes then upload the state.
        </p>

        <p className="table__problem">Let’s use a library next time. Drag and Drop function on mobile does not work.</p>
        <p className="table__solution">
          I wanted to build everything from scratch, so I used HTML drag and drop API.<br></br>
          It felt really good after many obstacles. However, I found that it does not work on mobile! There were many things to consider drag and drop functions to work in mobile.<br></br>
          Using lots of libraries is not good, but sometimes it is necessary.
        </p>

        <p className="table__problem">
          Poor CSS structuring.<br></br>I got lost after I came back weeks later...
        </p>
        <p className="table__solution">
          Learn BEM, SMACSS, OOCSS.<br></br>Read articles, but I need to practice more.
        </p>
        <p className="table__problem">Lazy loading.</p>
        <p className="table__solution">
          Rendering videos and images are heavy work. Painting multiple contents at once will
          increase blocking time which means bad site performance.<br></br>
          One solution is lazy loading.<br></br>
          Instead of loading everything at once, download sections or contents that only what the
          user needs.<br></br>
          Use loading=”lazy” with inline width and height.<br></br>
          After defining the width on the line, lazy loading started to work.
        </p>
      </div>
    </Modal>
  );
};

export default MasonryProjectModal;
