var loginButton = document.getElementsByTagName('login_button');

function studentPage() {
    var usrNameInput = document.getElementById('usrname').value;
    var pswInput = document.getElementById('psw').value;
    if ((usrNameInput == 61968 && pswInput == "elena") || (usrNameInput == 61935 && pswInput == "nevi") || (usrNameInput == 61932 && pswInput == "geri")) {
        document.location.href = 'student_menu.html';
    }
}

function teacherPage() {
    var teacherNameInput = document.getElementById('usrname').value;
    var pswInput = document.getElementById('psw').value;
    if ((teacherNameInput == "admin" && pswInput == "admin")) {
        document.location.href = 'teacher_menu.html';
    }
}

function adminPage() {
    var teacherNameInput = document.getElementById('usrname').value;
    var pswInput = document.getElementById('psw').value;
    if ((teacherNameInput == "adm" && pswInput == "adm")) {
        document.location.href = 'admin_page.html';
    }
}

function sortingTable() {

    var tagNameTr = document.getElementsByTagName("tr");
    var getButton = document.getElementsByClassName("Button")
    getButton[1].selectedIndex = getButton[1].options[0].textContent;
    getButton[2].selectedIndex = getButton[2].options[0].textContent;
    getButton[3].selectedIndex = getButton[3].options[0].textContent;

    for (var b = 0; b <= tagNameTr.length - 1; b++) {
        tagNameTr[b].style.display = "table-row";
    }
    var choosenArr = [];
    var tableLectureArr = [];
    var teacherNameInput = document.getElementsByClassName("Button");
    var Name = teacherNameInput[0].options[teacherNameInput[0].selectedIndex].value;
    var Year = teacherNameInput[1].options[teacherNameInput[1].selectedIndex].value;
    var Category = teacherNameInput[2].options[teacherNameInput[2].selectedIndex].value;
    var grLevel = teacherNameInput[3].options[teacherNameInput[3].selectedIndex].value;
    choosenArr.push(Name, Year, Category, grLevel)
    var numberOfCols = document.getElementsByTagName("tr").length - 1;
    // for (var b = 1; b <= numberOfCols; b++) {
    //     document.getElementsByTagName("tr")[b].style.display = "visible";
    // }

    for (var i = 1; i <= numberOfCols; i++) {
        var Row = document.getElementsByTagName("tr")[i].cells[2].textContent.trim();
        tableLectureArr.push(Row)
        var allRolls = document.getElementsByTagName("tr")[i];
        if (choosenArr[0] != Row) {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
}

function sortingTable2() {
    var tagNameTr = document.getElementsByTagName("tr");
    var getButton = document.getElementsByClassName("Button")
    getButton[0].selectedIndex = getButton[0].options[0].textContent;
    getButton[2].selectedIndex = getButton[2].options[0].textContent;
    getButton[3].selectedIndex = getButton[3].options[0].textContent;
    for (var b = 0; b <= tagNameTr.length - 1; b++) {
        tagNameTr[b].style.display = "table-row";
    }
    var choosenArr = [];
    var tableLectureArr = [];
    var teacherNameInput = document.getElementsByClassName("Button");
    var Name = teacherNameInput[0].options[teacherNameInput[0].selectedIndex].value;
    var Year = teacherNameInput[1].options[teacherNameInput[1].selectedIndex].value;
    var Category = teacherNameInput[2].options[teacherNameInput[2].selectedIndex].value;
    var grLevel = teacherNameInput[3].options[teacherNameInput[3].selectedIndex].value;
    choosenArr.push(Name, Year, Category, grLevel)
    var numberOfCols = document.getElementsByTagName("tr").length - 1;
    // for (var b = 1; b <= numberOfCols; b++) {
    //     document.getElementsByTagName("tr")[b].style.display = "visible";
    // }

    for (var i = 1; i <= numberOfCols; i++) {
        var Row = document.getElementsByTagName("tr")[i].cells[4].textContent.trim();
        tableLectureArr.push(Row)
        var allRolls = document.getElementsByTagName("tr")[i];
        if (choosenArr[1] != Row) {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
}

function sortingTable3() {
    var tagNameTr = document.getElementsByTagName("tr");
    var getButton = document.getElementsByClassName("Button")
    getButton[0].selectedIndex = getButton[0].options[0].textContent;
    getButton[1].selectedIndex = getButton[1].options[0].textContent;
    getButton[3].selectedIndex = getButton[3].options[0].textContent;
    for (var b = 0; b <= tagNameTr.length - 1; b++) {
        tagNameTr[b].style.display = "table-row";
    }
    var choosenArr = [];
    var tableLectureArr = [];
    var teacherNameInput = document.getElementsByClassName("Button");
    var Name = teacherNameInput[0].options[teacherNameInput[0].selectedIndex].value;
    var Year = teacherNameInput[1].options[teacherNameInput[1].selectedIndex].value;
    var Category = teacherNameInput[2].options[teacherNameInput[2].selectedIndex].value;
    var grLevel = teacherNameInput[3].options[teacherNameInput[3].selectedIndex].value;
    choosenArr.push(Name, Year, Category, grLevel)
    var numberOfCols = document.getElementsByTagName("tr").length - 1;
    // for (var b = 1; b <= numberOfCols; b++) {
    //     document.getElementsByTagName("tr")[b].style.display = "visible";
    // }

    for (var i = 1; i <= numberOfCols; i++) {
        var Row = document.getElementsByTagName("tr")[i].cells[5].textContent.trim();
        tableLectureArr.push(Row)
        var allRolls = document.getElementsByTagName("tr")[i];
        if (choosenArr[2] != Row) {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
}

function sortingTable4() {
    var tagNameTr = document.getElementsByTagName("tr");
    var getButton = document.getElementsByClassName("Button")
    getButton[0].selectedIndex = getButton[0].options[0].textContent;
    getButton[1].selectedIndex = getButton[1].options[0].textContent;
    getButton[2].selectedIndex = getButton[2].options[0].textContent;
    for (var b = 0; b <= tagNameTr.length - 1; b++) {
        tagNameTr[b].style.display = "table-row";
    }
    var choosenArr = [];
    var tableLectureArr = [];
    var teacherNameInput = document.getElementsByClassName("Button");
    var Name = teacherNameInput[0].options[teacherNameInput[0].selectedIndex].value;
    var Year = teacherNameInput[1].options[teacherNameInput[1].selectedIndex].value;
    var Category = teacherNameInput[2].options[teacherNameInput[2].selectedIndex].value;
    var grLevel = teacherNameInput[3].options[teacherNameInput[3].selectedIndex].value;
    choosenArr.push(Name, Year, Category, grLevel)
    var numberOfCols = document.getElementsByTagName("tr").length - 1;
    // for (var b = 1; b <= numberOfCols; b++) {
    //     document.getElementsByTagName("tr")[b].style.display = "visible";
    // }

    for (var i = 1; i <= numberOfCols; i++) {
        var Row = document.getElementsByTagName("tr")[i].cells[6].textContent.trim();
        tableLectureArr.push(Row)
        var allRolls = document.getElementsByTagName("tr")[i];
        if (choosenArr[3] != Row) {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
}

function sortingTable5() {
    var tagNameTr = document.getElementsByTagName("tr");
    var getButton = document.getElementsByClassName("Button")
    var choosenSbj = getButton[0].value;
    console.log(choosenSbj)
    for (var b = 0; b <= tagNameTr.length - 1; b++) {
        tagNameTr[b].style.display = "table-row";
    }
    var choosenArr = [];
    var tableLectureArr = [];
    var SubjectNameInput = document.getElementsByClassName("Button");
    var number = SubjectNameInput[0].options[SubjectNameInput[0].selectedIndex].value;
    choosenArr.push(number)
    var numberOfCols = document.getElementsByTagName("tr").length - 1;
    
    for (var i = 1; i <= numberOfCols; i++) {
        var Row = document.getElementsByTagName("tr")[i].cells[3].textContent.trim();
        tableLectureArr.push(Row)
        var allRolls = document.getElementsByTagName("tr")[i];
        if (choosenArr[0] != Row) {
            document.getElementsByTagName("tr")[i].style.display = "none";
        }
    } }