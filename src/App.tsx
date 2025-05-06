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

import { useState } from "react"
import "./styles.css"

interface SquareProps {
  value: string;
  handleClick: () => void
}

function Square({ value, handleClick }: SquareProps) {
  return <button onClick={handleClick} className="square">{value}</button>
}


export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (index: number): void => {
    const nextSquares = squares.slice();
    // nextSquares became copy of squares now
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }
  return (
    <div className="container">
      {/* div elementinin display özelliği block'tur yani bir sonraki element bir alt satırda başlar */}
      <div className="board-row">
        {/* hata verir alttaki satır */}
        {/*
          onSquareClick={handleClick} ilettiğinizde, handleClick fonksiyonunu prop olarak iletiyordunuz.
          Fonksiyonu çağırmıyordunuz! Ancak şimdi anında o fonksiyonu çağırıyorsunuz—handleClick(0)
          etrafındaki parentezlere dikkat edin—ve fonksiyonun erken çalışmasının sebebi bu.
          handleClick  fonksiyonunu kullanıcı tıklayana kadar çağırmak istemezsiniz! */}
        {/* <Square value={squares[0]} handleClick={handleClick(0)} /> */}
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

