import CardItemPrice from "./cardItemPrice";

const cardItems = [
  {
    title: "beginner'",
    desc: "start to grow",
    price: 0,
    cta: "use now",
  },
  {
    title: "start",
    desc: "whole work",
    price: 34,
    cta: "with IA",
  },
  {
    title: "advanced",
    desc: "IA integrates",
    price: 334,
    cta: "especial functions",
  },
];

export default function BoardPrice() {
  return (
    <div className="flex gap-2 rounded-3xl">
      {cardItems.map((item, index) => (
        <CardItemPrice
          key={index}
          title={item.title}
          cta={item.cta}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </div>
  );
}
