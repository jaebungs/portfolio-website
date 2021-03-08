import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

const CocktailProjectModal = ({isOpen, setIsOpen, code}) => {
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
      contentLabel="mymy cocktails modal"
      style={customStyles}
      onRequestClose={() => handleCloseModal()}
    >
      <div className="modal__header">
        <h2 className="modal__title">Mymy cocktails</h2>
        <button className="modal__close-button" onClick={handleCloseModal}>
          Close
        </button>
      </div>

      <button className="modal__code-button" onClick={handleCodeOnClick}>
        VIEW CODE
      </button>

      <h3 className="modal__subtitle">Introduction</h3>
      <p className="modal__p">
        I enjoy and appreciate good drinks. However, me and my girlfriend found that searching for
        an easy home makeable cocktail recipe took time.
      </p>
      <p className="modal__p">
        We encountered many recipes that are bad or require many ingredients.
      </p>

      <h3 className="modal__subtitle">The goal</h3>
      <p className="modal__p">
        So I decided to make an app that can provide relatively easy recipes with simple search
        functions!
      </p>

      <h3 className="modal__subtitle">Development Process</h3>
      <ol className="modal__ol">
        <li>Brainstorm app features.</li>
        <li>Choose tools.</li>
        <li>Browse other cocktail recipe apps.</li>
        <li>Brainstorm design.</li>
        <li>Start coding!</li>
      </ol>

      <h3 className="modal__subtitle">Problems Encountered</h3>
      <div className="modal__grid-table">
        <p className="table__header">Problems</p>
        <p className="table__header">Solution / Learning outcome</p>
        <p className="table__problem">Not sure how to implement authentication.</p>
        <p className="table__solution">
          Researched how to implement Google auth and JSON web token. During this process, I found
          that I have two ways of authentication and authorization of a user.<br></br>
          1.Session Cookies.<br></br>
          2.JWT<br></br>
          <br></br>
          Process for Cookies:<br></br>
          When the user signs in, the server will create session data and store
          it in its memory. After the server creates a session cookie in its memory, it will be sent
          to the user in ‘Set-Cookies: session ID’ form. This will be contained in every request
          header that the user makes and the server will use this to verify the user.<br></br>
          <br></br>
          Process for JWT:<br></br> 
          When the user signs in, unlike using cookies, the server does not create or store any
          information. Instead, the server will verify first if the user can successfully log in.
          After the user is authenticated, the server creates JSON Web Token, which is used for
          authorization. JWT will be stored in the client's localStorage or session storage or
          cookies and it will be used on every request either in header or body.<br></br>
          Once the server receives the jwt, it decodes to validate the user. Advantages of JWT Saves the server
          memory since it does not need to record, only needs to issue a token.<br></br>
          <br></br>
          Caution!<br></br>
          Do not
          include sensitive information in JWT. Although it says ‘encrypted’, it is actually not.<br></br>
          <br></br>
          JWT contains 3 parts (header, payload, signature). I used jsonwebtoken npm package, the
          order is (payload, secretOrPrivateKey, [options, callback]). Actually code is
          <SyntaxHighlighter language="javascript" style={docco}>
            {
              'jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})'
            }
          </SyntaxHighlighter>
        </p>

        <p className="table__problem">
          Redux only supports synchronous and has some rules when updating a store.
        </p>
        <p className="table__solution">
          Researched and wrote a short article why Redux needed a middleware like redux-thunk. 
          <a href="https://dev.to/jaebungs/why-redux-thunk- 1dka"> A short article about why a middleware is neccessary.</a>
        </p>

        <p className="table__problem">
          Both server and client files are in one same folder. Many problems during deployment due
          to my lack of experience.
        </p>
        <p className="table__solution">
          After long hours of searching and fixing, Back-end is deployed on Heroku and Front-end is
          deployed on Netlify. Netlify is connected to github repository for easy and fast CD.
        </p>

        <p className="table__problem">
          Lots of manual testing on API calls and storing in redux, filtering and searching
          functions.
        </p>
        <p className="table__solution">
          Following a testing tutorial did not really feel testing is that necessary. However,
          although the app is small and simple, I can tell why testing is important. Next project
          will use testing tools like Jest and Enzyme.
        </p>

        <p className="table__problem">Rendering SVG files.</p>
        <p className="table__solution">
          It was my first time using a svg format image on an app. There are some options on how to
          use svg files.<br></br>
          Use it with <code>{'<img>'}</code>. Second, use it as a component (inline SVG). Using it as a component is better because we
          can control style and even animate svg files. This app is not CRA, thus, SVGR library was
          required and used in webpack.
        </p>

        <p className="table__problem">Production renders too slow. Bundle size too big.</p>
        <p className="table__solution">
          Mind blowing moment. React lazy and Suspense!<br></br>
          Code splitting was very easy with this two API.<br></br> 
          Bundle size got reduced from 463KB to 246KB just by doing Route-based code splitting.
          This seems simpler than webpack code splitting.
        </p>

        <p className="table__problem"></p>
        <p className="table__solution"></p>
      </div>

      <h3 className="modal__subtitle">Other learning outcome</h3>
      <ol>
          <li>The power of Redux hook (useSelector, useDispatch). These two simply replaced mapStateToProps and Connect. As a result, code got simpler, shorter and easy to track.</li>
        <li>Other React hooks like useHistory, useLocation, Suspense, Lazy etc</li>
        <li>This project made me dive deep on how react rendering actually works. This article by Mark was really helpful. <a href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior">Mark's dev blog about React Rendering.</a></li>
        <li>Material-UI</li>
        <li>Lighthouse Performance:100 100 100 SEO: 90 scored</li>
      </ol>
    </Modal>
  );
};

export default CocktailProjectModal;
