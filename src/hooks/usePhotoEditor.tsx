import { usePhotoEditor } from 'react-photo-editor';
import { useNavigate } from 'react-router-dom';

export default function CustomPhotoEditor(file: File) {
    const navigate = useNavigate();

  const {
    canvasRef,
    brightness,
    setBrightness,
    handleZoomIn,
    handleZoomOut,
    generateEditedFile,
    resetFilters,
  } = usePhotoEditor({
    file,
    defaultBrightness: 100,
    defaultContrast: 100,
    defaultSaturate: 100,
    defaultGrayscale: 0,
  });

  const handleSave = async () => {
    const editedFile = await generateEditedFile();
    navigate(`/${editedFile}`); 
  };

  return (
    <div>
      <canvas ref={canvasRef} />

      <div>
        <label>Brightness: {brightness}</label>
        <input
          type='range'
          min='0'
          max='200'
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
      </div>
      
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={resetFilters}>Reset</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}