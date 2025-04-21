import catImg from '../_public/cat.jpeg';

export default function WindowmImage() {
  return (
    <div className="flex flex-auto justify-center items-center min-h-screen w-full">
      <img src={catImg} width={1280} height={720} alt="Placeholder" className="max-w-full max-h-full" />
    </div>
  )
} 
