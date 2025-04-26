import catImg from '../_public/cat.jpeg';
import Card from './card'

export default function Photos() {
  return (
    <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 m-8">
      <Card />
        <div className="h-32 rounded bg-gray-300"><img src={catImg} alt="none" /></div>
        <div className="h-32 rounded bg-gray-300"><img src={catImg} alt="none" /></div>
        <div className="h-32 rounded bg-gray-300"><img src={catImg} alt="none" /></div>
        <div className="h-32 rounded bg-gray-300"><img src={catImg} alt="none" /></div>
    </div>
  )
}
