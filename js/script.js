// ! recupero documenti dal DOM

const gridElement = document.getElementById("grid")
const button = document.querySelector("button")
const difficultyElement = document.getElementById("difficulty")

// ! FUNZIONI

// ! calcolo il numero di celle in base alla difficoltà scelta
const getTotalCells = (difficulty) => {
    if (difficulty === 'medium') return 81;
    if (difficulty === 'hard') return 49;
    return 100;
}

// ! creo una cella con il suo numero
const createCell = (number, difficulty) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', difficulty);
    cell.append(number);
    return cell;
}

const playGame = () => {
    // svuoto la griglia
    gridElement.innerText = '';

    // recupero la difficoltà scelta e il numero di celle
    const difficulty = difficultyElement.value;
    const totalCells = getTotalCells(difficulty);

    // Genero le celle e le stampo nella griglia
    for (let i = 1; i <= totalCells; i++){
        const cell = createCell(i, difficulty);

        gridElement.appendChild(cell)

        // ! le celle cliccate diventano verdi e stampo il numero in console

        cell.addEventListener('click', function(){
            cell.classList.toggle('clicked')
            console.log(i)
        })
    }
}

// ! creo evento del button

button.addEventListener("click", playGame)
