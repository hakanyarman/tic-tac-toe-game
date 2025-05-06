// Bir dosyada export default kullanırsan: O dosyayı başka bir yerde import ederken, parantez içine almak zorunda değilsin
// default olduğunda import kısmında ismi değiştirebilirsin, bu bir zorunluluk değil.

// export (Named Export)

// export function mesajVer() {
//   console.log("Merhaba Dünya!");
// }

// export const selam = "Selamlar!";

// import { mesajVer, selam } from './mesaj.js';

// yalnızca en az bir kez manuel olarak yazdığınız kodu kopyalamanızı tavsiye ederiz.

// interfaceler PascalCase yazılır.

import "./styles.css"
interface SquareProps {
  value: number
}

function Square({ value }: SquareProps) {
  const handleClick = () => {
    //console.log(`${value} button clicked`)
  }
  return <button onClick={handleClick} className="square">{value}</button>
}


export default function Board() {
  return (
    <>
      {/* div elementinin display özelliği block'tur yani bir sonraki element bir alt satırda başlar */}
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  )
}

