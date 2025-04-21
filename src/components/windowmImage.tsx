import { ReactPhotoEditor } from 'react-photo-editor'
import useReactPhotoEditor from '../hooks/reactPhotoEditor';
import imageToEdit from '../store/imageToEdit';

export default function WindowmImage() {
  const { showModalHandler, hideModal, handleSaveImage, setFileData } = useReactPhotoEditor();
  const { file, showModal } = imageToEdit();

  return (
    <>
      <div>
        <input type='file' onChange={(e) => setFileData(e)} multiple={false} />
        <button onClick={showModalHandler}>Edit Photo</button>
        <ReactPhotoEditor
          open={showModal}
          onClose={hideModal}
          file={file}
          onSaveImage={handleSaveImage}
        />
      </div>
    </>
  )
} 
