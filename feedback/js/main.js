window.addEventListener('load', function () {
    let btn = this.document.querySelector(".btn-my"),
        valuationItem = this.document.querySelectorAll(".valuation-item"),
        likeArea = this.document.querySelector("#like"),
        dislikeArea = this.document.querySelector("#dislike"),
        etcArea = this.document.querySelector("#etc"),
        newDateVar = new Date(),
        dateNow =null,
        valueOfRating= null,
        isOk = false;
        newObjectData = {};

    let chatID = -340081414,
        telegramAPI = '677979100:AAGGIdqm_8HSWSQag_93ipViNr97bQw9vQA';

    btn.addEventListener('click', function () {
        checkAreaAndValuation();
        if(isOk){
            newDate();
            createObject();
            let message = "";
            for (key in newObjectData) {
                message += key + " - " + newObjectData[key] + "\n";
            }
            let url = 'https://api.telegram.org/bot' + telegramAPI + '/sendMessage?chat_id=' + chatID + '&text=';
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", url + message, true);
            xhttp.send();
            clearArea();
        }
    });

    function checkAreaAndValuation() {
        let flag1 = false,
        flag2 = false;
        if (likeArea.value == null || likeArea.value == "") {
            this.alert("Введіть значення");
        } else if (dislikeArea.value == null || dislikeArea.value == "") {
            this.alert("Введіть значення");
        } else if (etcArea.value == null || etcArea.value == "") {
            this.alert("Введіть значення");
        } else {
            flag1 = true;
        }
        
        for (let i = 0; i < valuationItem.length; i++) {
            if(valuationItem[i].classList.contains("active")) {
                flag2= true;
            }
        }
        if(!flag2){
            alert("Виберіть оцінку");
            
        }
        if (flag1 && flag2){
        isOk=true;
        }
    }

    function addedActiveClass() {
        valuationItem.forEach(function (item) {
            item.addEventListener('click', function (event) {
                for (let i = 0; i < valuationItem.length; i++) {
                    valuationItem[i].classList.remove("active");
                }
                let target = event.target;
                if (item == target) {
                    if (!item.classList.contains("active")) {
                        item.classList.add("active");
                        valueOfRating = item.textContent;
                    }
                }
            });
        });
    }


    function newDate() {
    let minutes = newDateVar.getMinutes(),
        hours = newDateVar.getHours(),
        day = newDateVar.getDay(),
        month = newDateVar.getMonth();
        dateNow = month+1 + " month " + day+1 + " day of week " + hours +":" + minutes;
    }

    function clearArea() {
        likeArea.value ="";
        dislikeArea.value ="";
        etcArea.value = "";
        valuationItem.forEach(function (item) {
            if(item.classList.contains("active")) {
               item.classList.remove("active");
            }
        });
    }

    function createObject() {
        newObjectData.Date = dateNow;
        newObjectData.Like = likeArea.value;
        newObjectData.Dislike = dislikeArea.value;
        newObjectData.Etc = etcArea.value;
        newObjectData.Rating = valueOfRating;
        console.log(newObjectData);
    }

    addedActiveClass();
    
});
// по кліку перевірку на пусті поля і вибрану оцінку (якщо не вибрані - алерт) 
// треба отримати дату теперішню і зберегти
// зберегти в об'єкт оцінку 
// зберегти три поля в об'єкт
// відправка об'єкта в телеграм
// хостинг і домен
// 

