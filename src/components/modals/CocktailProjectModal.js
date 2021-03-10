import React from 'react';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  const jwtExample =
    'jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})';
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCodeOnClick = () => {
    window.open(code, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="mymy cocktails case study modal"
      style={customStyles}
      onRequestClose={() => handleCloseModal()}
    >
      <div className="modal__header">
        <h2 className="modal__title green-typography">Mymy cocktails</h2>
        <button className="modal__close-button" onClick={handleCloseModal}>
          Close
        </button>
      </div>

      <button className="modal__code-button--green" onClick={handleCodeOnClick}>
        VIEW CODE
      </button>

      <h3 className="modal__subtitle green-typography">Introduction</h3>
      <p className="modal__p">
        I enjoy and appreciate wonderful drinks.. However, my girlfriend and I found that searching for an
        easy cocktail recipe takes time.
        <br></br>
        We encountered many recipes that are bad or require too many ingredients.
      </p>
      <h3 className="modal__subtitle green-typography">The goal</h3>
      <p className="modal__p">
        Create an app that can provide relatively easy recipes with simple search
        functions.
        <br></br>
        Even if a user does not have all ingredients, this app should be able to suggest other
        options.
      </p>

      <h3 className="modal__subtitle green-typography">Development Process</h3>
      <ol className="modal__ol">
        <li>Brainstorm app features.</li>
        <ul className="modal-innerul">
          <li>Search Function(by name, by ingredients, auto-complete)</li>
          <li>Oauth(changed to google auth) and custom login</li>
          <li>Bookmark function</li>
          <li>Build a simple REST API.</li>
          <li>Chip ingredients indicator</li>
        </ul>
        <li>Choose tools.</li>
        <li>Browse other cocktail recipe apps.</li>
        <li>Brainstorm design.</li>
        <ul className="modal-innerul">
          <li>Clean and minimalistic design can allow users to focus on the contents</li>
          <li>Same layout for Library and My bar page</li>
        </ul>
        <li>Start coding!</li>
      </ol>

      <h3 className="modal__subtitle green-typography">Problems Encountered</h3>
      <div className="modal__grid-table">
        <p className="table__header green-typography">Problems</p>
        <p className="table__header green-typography">Solution / Learning outcome</p>
        <p className="table__problem">Not sure how to implement authentication.</p>
        <p className="table__solution">
          Researched how to implement Google auth and JSON web token. During this process, I found
          that I have two ways of authentication and authorization of a user.
          <br></br>
          1.Session Cookies.<br></br>
          2.JWT<br></br>
          <br></br>
          Process for Cookies:<br></br>
          When the user signs in, the server will create session data and store it in its memory.
          After the server creates a session cookie in its memory, it will be sent to the user in
          ‘Set-Cookies: session ID’ form. This will be contained in every request header that the
          user makes and the server will use this to verify the user.<br></br>
          <br></br>
          Process for JWT:<br></br>
          When the user signs in, unlike using cookies, the server does not create or store any
          information. Instead, the server will verify first if the user can successfully log in.
          After the user is authenticated, the server creates JSON Web Token, which is used for
          authorization. JWT will be stored in the client's localStorage or session storage or
          cookies and it will be used on every request either in header or body.<br></br>
          Once the server receives the jwt, it decodes to validate the user. Advantages of JWT Saves
          the server memory since it does not need to record, only needs to issue a token.<br></br>
          <br></br>
          Caution!<br></br>
          Do not include sensitive information in JWT. Although it says ‘encrypted’, it is not.
          <br></br>
          <br></br>
          JWT contains 3 parts (header, payload, signature). I used jsonwebtoken npm package, the
          order is (payload, secretOrPrivateKey, [options, callback]). Actually code is
          <SyntaxHighlighter
            language="javascript"
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            wrapLines={true}
            style={dark}
          >
            {jwtExample}
          </SyntaxHighlighter>
        </p>

        <p className="table__problem">Security concerns.</p>
        <p className="table__solution">
          Learned XSS (Cross-Site Scripting) and XSRF (Cross-Site Request Forgery).<br></br>
          Using JWT with localStorage is safe from XSRF attacks. <br></br>
          Implement expiration time in JWT. Using expiration can increase the chance of compromised
          tokens becoming useless.
        </p>

        <p className="table__problem">
          Redux only supports synchronous and has some rules when updating a store.
        </p>
        <p className="table__solution">
          Researched and wrote a short article why Redux needed a middleware like redux-thunk.
          <a href="https://dev.to/jaebungs/why-redux-thunk- 1dka">
            {' '}
            A short article about why a middleware is neccessary.
          </a>
        </p>

        <p className="table__problem">
          Both server and client files are in one same folder. Many problems during deployment due
          to my lack of experience.
        </p>
        <p className="table__solution">
          After long hours of searching and fixing, back-end is deployed on Heroku and front-end is
          deployed on Netlify. Netlify is connected to the Github repository for easy and fast CD.
        </p>

        <p className="table__problem">
          Lots of manual testing on API calls and storing in redux, filtering and searching
          functions.
        </p>
        <p className="table__solution">
          Following a testing tutorial did not make me feel testing is that necessary. However,
          although the app is small and simple, I had to do lots of manual checking for API calls
          and page renderings. <br></br> Now I can tell why testing is important.
          <br></br>
          The next project will use testing tools like Jest and Enzyme.
        </p>

        <p className="table__problem">
          Rendering SVG file in React. <br></br>
          Things to consider when choosing image types.
        </p>
        <p className="table__solution">
          It was my first time using an SVG format image on an app. There are some options on how to
          use SVG files.<br></br>
          Use it with <code>{'<img>'}</code>. Second, use it as a component (inline SVG). Using it
          as a component is better because we can control style and even animate svg files.{' '}
          <br></br> This app is not CRA, thus, SVGR library was required and used in webpack.
          <br></br>
          <br></br>
          Also, I learned differences between image types.<br></br>
          JPEG is better because of the file size compare to PNG. PNG quality is better, but hard to
          tell by eyes.<br></br>
          But, SVG is the best.
        </p>

        <p className="table__problem">Production renders too slow. Bundle size too big.</p>
        <p className="table__solution">
          Mind blowing moment. React lazy and Suspense!<br></br>
          Code splitting was very easy with these two APIs.<br></br>
          Bundle size got reduced from 463KB to 246KB just by doing Route-based code splitting. This
          seems simpler than webpack code splitting.
        </p>
      </div>

      <h3 className="modal__subtitle green-typography">Other learning outcomes</h3>
      <ol>
        <li>
          I felt the power of Redux hooks! (useSelector, useDispatch). These two hooks simply
          replaced mapStateToProps and Connect. As a result, the code got simpler, shorter and easy
          to track.
        </li>
        <li>Proficient using React hooks.</li>
        <li>
          This project made me dive deep on how react rendering actually works. This article by Mark
          was really helpful.{' '}
          <a href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior">
            Mark's dev blog about React Rendering.
          </a>
        </li>
        <li>Material-UI</li>
        <li>Learned Lighthouse.</li>
      </ol>
    </Modal>
  );
};

export default CocktailProjectModal;
