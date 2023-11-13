
const income = [
    new Income(2100, 'Salary' ),
    new Income(1500, 'Sell car')
];

const expenditures = [
    new Expenditure(900, 'Rent house'),
    new Expenditure(400, 'Clothes')
];


const loadApp = () => {
    loadHead();
}


const loadHead = () => {
    const totalIncome = income.reduce((prev, curr) => prev.value + curr.value);
    const totalExpenditure = expenditures.reduce((prev, curr) => prev.value + curr.value);
    const budget = totalIncome - totalExpenditure;
    const expenditurePorcentage =(((totalExpenditure)/budget)*100)    

    document.getElementById('income').innerHTML = `+ ${formatCurrency(totalIncome)}`;
    document.getElementById('expenditure').innerHTML = `- ${formatCurrency(totalExpenditure)}` ;
    document.getElementById('budget').innerHTML = `${formatCurrency(budget)}`;
    document.getElementById('expenditure_porcentage').innerHTML = `${formatPercent(expenditurePorcentage, 2)}%`

    console.log(totalIncome);
    console.log(totalExpenditure);
    console.log(expenditurePorcentage);

}

const formatCurrency = (number) => Number(number).toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
const formatPercent = (number, fixed) => Number(number).toFixed(fixed);
