let start = document.getElementById('start'),
    budgetValue = document.querySelectorAll('.budget-value')[0],
    daybudgetValue =document.querySelectorAll('.daybudget-value')[0],
    levelValue =document.querySelectorAll('.level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesAll = document.getElementsByClassName('optionalexpenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.querySelectorAll('.income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.querySelectorAll('.yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    buttonsElements = document.getElementsByTagName('button'),
    elementButtons = document.getElementsByTagName('button')[0],
    elementButtons1 = document.getElementsByTagName('button')[1],
    elementButtons2 = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue= document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money,time, isPress=false, suma;

    checkInputExpensesItem();
    if(isPress= false){
    elementButtons.setAttribute("disabled", "true");
    elementButtons1.setAttribute("disabled", "true");
    elementButtons2.setAttribute("disabled", "true");
}
    function checkInputExpensesItem(){
        let count=0;
        for(i=0; i<expensesItem.length;i++){
            if(expensesItem[i].value== ''){
                count += 1;
            }else{}
        } console.log(count);
        if(count== expensesItem.length && isPress== false){
            // elementButtons.setAttribute("disabled", "true");
            console.log();
        }
    }
    function checkInputOptionalExpenses(){
        let count=0;
        for(i=0; i<optionalExpensesAll.length;i++){
            if(optionalExpensesAll[i].value== ''){
                count += 1;
            }else{}
        } console.log(count);
        if(count== optionalExpensesAll.length && isPress== false){
            // elementButtons.setAttribute("disabled", "true");
            console.log();
        }
    }
        
    
    start.addEventListener('click', function() {
        isPress = true;
        time = prompt("Введите дату в формате YYYY-MM-DD"); 
        money = +prompt("Ваш бюджет на месяц?");
        
        while(isNaN(money) || money=="" || money == null ) {
            money = +prompt("Ваш бюджет на месяц?");
        }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    });

    elementButtons.addEventListener('click', function() {
        let sum = 0;

        for(i=0; i< expensesItem.length; i++){
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            
            if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else{
                i--;
            }
        }
        expensesValue.textContent = sum;
        suma= sum;
        console.log(suma);
    });

    elementButtons1.addEventListener('click', function() {
        for(i=0; i< optionalexpensesItem.length; i++){
            let num = optionalexpensesItem[i].value;
            appData.optionalExpenses[i]=num;
            optionalExpensesValue.textContent += appData.optionalExpenses[i]+ ' ';
        }
    });

    elementButtons2.addEventListener('click', function(){
        console.log(suma);
        if(suma == undefined){suma=0;}
        if(appData.budget != undefined){

        appData.moneyPerDay = ((appData.budget-suma)/30).toFixed();
        daybudgetValue.textContent= appData.moneyPerDay;
        console.log(daybudgetValue);

            if(appData.moneyPerDay < 100) {
                levelValue.textContent="Минимальный уровень достатка";
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent="Средний уровень достатка";
            } else if(appData.moneyPerDay > 2000) {
                levelValue.textContent="Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else{
            daybudgetValue.textContent = "Произошла ошибка";
        }
        console.log(suma);
    });

    chooseIncome.addEventListener('input', function() {
     
        let items = chooseIncome.value;
        appData.income= items.split(', ');
        incomeValue.textContent= appData.income;
        // console.log(incomeValue);
    });

    checkSavings.addEventListener('click', function(){
        if(appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
        // console.log(appData.savings);
    });

    sumValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
                percent = +percentValue.value;
                // console.log(sum);
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            console.log(monthValue);
        }
    });

    percentValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        // console.log(appData);
        }
    });

    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };
    


