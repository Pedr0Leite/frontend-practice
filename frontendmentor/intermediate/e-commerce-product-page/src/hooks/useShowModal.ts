import { useState } from 'react';

const useSetModalDisplay = () => {
  const [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return { modalShow, toggleModal };
};

export default useSetModalDisplay;
