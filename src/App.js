
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';

import { useState } from 'react';

function App() {
  const dialogIcon = 'https://raw.githubusercontent.com/josephadoga/josephadoga/main/assets/favicon.png';

  const [showDialog, setShowDialog] = useState(false);

  const close = () => {
    setShowDialog(false);
  }

  const overlay = <div className='overlay' onClick={close}></div>;

  return (
    <main>
      { showDialog ? overlay : null }
      <div className='container main-center'>
        <Dialog dialogIcon={dialogIcon} show={showDialog} close={close} />
        <button className='open' onClick={() => { setShowDialog(true) }}>Open Dialog</button>
        <StarRating />
      </div>
    </main>
  );
}

export default App;
