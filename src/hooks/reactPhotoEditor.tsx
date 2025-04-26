import { ChangeEvent } from 'react';
import imageToEdit from '../store/ImageToEdit';

export default function useReactPhotoEditor() {
  const { file, setFile, toggleModal, showModal } = imageToEdit();

  const showModalHandler = () => {
    if (file && !showModal) {
      toggleModal();
    }
  };

  const hideModal = () => {
    if (showModal) toggleModal();
  };

  const handleSaveImage = (editedFile: File) => {
    setFile(editedFile);
  };

  const setFileData = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return { showModalHandler, hideModal, handleSaveImage, setFileData };
}
