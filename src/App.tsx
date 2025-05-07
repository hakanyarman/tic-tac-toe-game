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
  onSquareClick: () => void
}


function Square({ value, onSquareClick }: SquareProps) {
  return <button onClick={onSquareClick} className="square">{value}</button>
}


export default function Board() {
  function calculateWinner(squares : ( string | null )[]) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (index: number): void => {
    const nextSquares = squares.slice();
    // nextSquares became copy of squares now
    // arrayler doğrudan değiştirilmek yerine kopyası oluşturularak değiştirilmelidir
    //Doğrudan veri mutasyonundan kaçınmak, verilerin önceki sürümlerini bozulmadan saklamanıza ve daha sonra yeniden kullanmanıza olanak tanır.
    // {xIsNext ? nextSquares[index] = "X" : nextSquares[index] = "O"}
    // JSX içinde süslü parantez {} yalnızca değer döndürmek için kullanılır; yan etki (side effect) içeren işlemler (örneğin = ile atama yapmak) JSX ifadesinde doğrudan kullanılamaz.
    // şöyle kullanılabilirdi:
    //nextSquares[index] = xIsNext ? "X" : "O"


    // square'e önceden x veya o verilmişse yani değeri null değilse tekrar tıklandığında değeri değişmesin sabit kalsın.
    if (squares[index]|| calculateWinner(squares)) {
      return
    }
    
    if (xIsNext) {
      nextSquares[index] = "X"
    } else {
      nextSquares[index] = "O"
    }
    setXIsNext(!xIsNext)
    // nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Kazanan: " + winner;
  } else {
    status = "Sıradaki oyuncu: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className="container">
      {/* div elementinin display özelliği block'tur yani bir sonraki element bir alt satırda başlar */}
      <div className="status">{status}</div>
      <div className="board-row">
        {/* hata verir alttaki satır */}
        {/*
          onSquareClick={handleClick} ilettiğinizde, handleClick fonksiyonunu prop olarak iletiyordunuz.
          Fonksiyonu çağırmıyordunuz! Ancak şimdi anında o fonksiyonu çağırıyorsunuz—handleClick(0)
          etrafındaki parentezlere dikkat edin—ve fonksiyonun erken çalışmasının sebebi bu.
          handleClick  fonksiyonunu kullanıcı tıklayana kadar çağırmak istemezsiniz! */}
        {/* <Square value={squares[0]} handleClick={handleClick(0)} /> */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        {/* React’te, olayları temsil eden prop’lar için onSomething olarak adlandırmak ve
           bu olayları yöneten fonksiyonları handleSomething olarak adlandırmak gelenek haline gelmiştir. */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )  
}

