let totalIncome = '';
let totalExpenditure = '';
let budget = '';
let expenditurePorcentage ='';




let income = [
    new Income(2100, 'Salary' ),
    new Income(1500, 'Sell car'),
];

let expenditures = [
    new Expenditure(900, 'Rent house'),
    new Expenditure(400, 'Clothes')
];


const loadApp = () => {
    loadHead();
    loadIncome();
    loadExpenditure();
}


const loadHead = () => {
    totalIncome = sumAll(income);
    totalExpenditure = sumAll(expenditures);
    budget = totalIncome - totalExpenditure;
    expenditurePorcentage =(((totalExpenditure)/totalIncome)*100)    

    document.getElementById('income').innerHTML = `+ ${formatCurrency(totalIncome)}`;
    document.getElementById('expenditure').innerHTML = `- ${formatCurrency(totalExpenditure)}` ;
    document.getElementById('budget').innerHTML = `${formatCurrency(budget)}`;
    document.getElementById('expenditure_porcentage').innerHTML = `${formatPercent(expenditurePorcentage, 2)}%`

    console.log(totalIncome);
    console.log(totalExpenditure);
    console.log(expenditurePorcentage);

}

const sumAll = (vect) => {
    let sum = 0;
    if(vect.length == 1) {
        sum = vect[0].value;
    }else if (vect.length > 1) {
        sum = vect.reduce((prev, curr) => prev.value + curr.value);
    }
    
    return sum;
}

const formatCurrency = (number) => Number(number).toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
const formatPercent = (number, fixed) => Number(number).toFixed(fixed);

const loadIncome = () => {
    let incomeListHTML = '';
    income.forEach((incm) => incomeListHTML += createHTMLincome(incm));
    document.getElementById('income-list').innerHTML = incomeListHTML;
}

const loadExpenditure = () => {
    let expenditureListHTML = '';
    expenditures.forEach((exp) => expenditureListHTML += createExpenditureHTML(exp));
    document.getElementById('expenditure-list').innerHTML = expenditureListHTML;
}

function createHTMLincome(income) {
    return `   <div class="element clearEstyles">
                    <div class="element_description">${income.description}</div>
                    <div class="right clearEstyles">
                        <div class="element_value">+ ${formatCurrency(income.value)}</div>
                        <div class="element_delete">
                            <button class="element_delete--btn" onclick="deleteIcome(${income.id})">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`
}

function createExpenditureHTML(expenditure) {
    const percent = (expenditure.value/totalExpenditure)*100;
    return `    <div class="element clearEstyles">
                    <div class="element_description">${expenditure.description}</div>
                    <div class="right clearEstyles">
                        <div class="element_value">- ${formatCurrency(expenditure.value)}</div>
                        <div class="element_porcentage">${formatPercent(percent)}%</div>
                        <div class="element_delete">
                            <button class="element_delete--btn" onclick="deleteExpenditure(${expenditure.id})">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`
}


const deleteIcome = (id) => {
 income = deletElementByIdArray(id, income);
 loadApp();   
}

const deleteExpenditure = (id) => {
    expenditures = deletElementByIdArray(id, expenditures);   
    loadApp();
}

const deletElementByIdArray = (id, array) =>  {
    return array.filter((element)=> element.id !== id);
}

