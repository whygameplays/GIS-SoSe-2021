"use strict";
var E21;
(function (E21) {
    // Exercise 1 - MORE SILLY CONSOLE OUTPUTS:
    console.log("Exercise 1: MORE SILLY CONSOLE OUTPUTS");
    // Exercise 1: A - MINIMUM:
    console.log("Exercise 1: A - MINIMUM");
    function min(...num) {
        let curmin = Infinity;
        for (let value of num) {
            if (value < curmin) {
                curmin = value;
            }
        }
        return curmin;
    }
    console.log(min(23, 1289, 23895, 1, 22, 344, 37, 5, 10, 250, 2441, 342423, 3124234234234));
    // Exercise 1: B - IS EVEN:
    console.log("Exercise 1: B - IS EVEN");
    function isEven(x) {
        if (x == 0) {
            return true;
        }
        else if (x == 1) {
            return false;
        }
        else {
            return (isEven(x - 2));
        }
    }
    console.log(isEven(50));
    console.log(isEven(7));
    console.log(isEven(8));
    console.log(isEven(23));
    // Wenn die zu prüfende Zahl -1 ist, dann bleibt das Probramm stehten, da x = x-2 den Wert -1 nie erreicht (-> 0 oder 1)
    // Hab bisher noch keine Lösung für das Problem gefunden
    // Exercise 1: C - INTERFACE:
    console.log("Exercise 1: C - INTERFACE");
    // Exercise 1: C - 2
    let student1 = { Forename: "Yannis", Matriculationnumber: 231230934, Courseofstudies: "MIB", Semester: 2, Dateofbirth: 260502 };
    let student2 = { Forename: "Felix", Matriculationnumber: 309342312, Courseofstudies: "MIB", Semester: 2, Dateofbirth: 190710 };
    let student3 = { Forename: "Henry", Matriculationnumber: 230923134, Courseofstudies: "MKB", Semester: 2, Dateofbirth: 101260 };
    // Exercise 1: C - 3
    let sArray = [student1, student2, student3, { Forename: "Max", Matriculationnumber: 192323134, Courseofstudies: "MKB", Semester: 2, Dateofbirth: 191109 }];
    console.log(sArray[3].Surname, sArray[0].Matriculationnumber, sArray[1].Courseofstudies + "\n-");
    // Exercise 1: C - 4
    function showInfo(stud) {
        console.log("Forename: " + stud.Forename + "\n" + "Matriculation number: " + stud.Matriculationnumber + "\n" + "Course of studies: " + stud.Courseofstudies + ", Semester: " + stud.Semester + "\n" + "Date of birth: " + stud.Dateofbirth + " (TTMMJJJJ)" + "\n" + "\n" + "Excercise 1: C - 4" + "\n" + "_______________________________________");
    }
    for (let stud of sArray) {
        showInfo(stud);
    }
    // Exercise 1: C - 5
    class Students2 {
        constructor(_forename, _matriculationnumber, _courseofstudies, _semester, _dateofbirth) {
            this.forename = _forename;
            this.matriculationnumber = _matriculationnumber;
            this.courseofstudies = _courseofstudies;
            this.semester = _semester;
            this.dateofbirth = _dateofbirth;
        }
        showInfoClass() {
            console.log("Forename: " + this.forename + "\n" + "Matriculation number: " + this.matriculationnumber + "\n" + "Course of studies: " + this.courseofstudies + ", Semester: " + this.semester + "\n" + "Date of birth: " + this.dateofbirth + "\n" + "\n" + "Excercise 1: C - 5" + "\n" + "_______________________________________");
        }
    }
    let student4 = new Students2("Sarah", 101010, "VIP", 2, 923134230); //xD
    student4.showInfoClass();
    // --------------------------------------------------------------------------------------------------//
    // Exercise 2: - ARRAYS:
    console.log("Exercise 2: ARRAYS");
    // Exercise 2: A - BACKWARDS:
    console.log("Exercise 2: A - BACKWARDS");
    let arr1 = [23, 1289, 23895, 2441, 342423, 5];
    function backwards(input) {
        let arr1 = new Array;
        for (let i = input.length - 1; i >= 0; i--) {
            arr1.push(input[i]);
        }
        return arr1;
    }
    console.log(backwards(arr1));
    // Exercise 2: B - JOIN:
    console.log("Exercise 2: B - JOIN");
    let arr2 = [2441, 342423, 5];
    let arr3 = [3423, 34, 34534];
    function join(arr2, arr3) {
        let arrayZusammenfügen = arr2.concat(arr3);
        console.log(arrayZusammenfügen);
    }
    console.log(join(arr2, arr3));
    // Exercise 2: C - SPLIT:
    console.log("Exercise 2: C - SPLIT");
    let arr4 = [100, 200, 300, 400, 500, 600];
    let cut1 = 2;
    let cut2 = 4;
    function split(_arr, _cut1, _cut2) {
        return _arr.slice(_cut1, _cut2);
    }
    console.log(split(arr4, cut1, cut2));
    // --------------------------------------------------------------------------------------------------//
    // Exercise 3: SOMETHING VISIAL, FINALLY:
    console.log("Exercise 3: SOMETHING VISIAL, FINALLY");
    // Exercise 3: A - EXPERIMENTING
    console.log("Exercise 3: A - EXPERIMENTING");
    let canvas1 = document.getElementById("canvas1");
    let context1 = canvas1.getContext("2d");
    context1.fillStyle = "Red";
    context1.fillRect(0, 0, 600, 300);
    context1.fillStyle = "Black";
    context1.fillRect(0, 300, 600, 80);
    context1.beginPath();
    context1.arc(50, 70, 70, 0, Math.PI * 2);
    context1.fillStyle = "Darkred";
    context1.fill();
    context1.beginPath();
    context1.arc(450, 70, 70, 0, Math.PI * 2);
    context1.fillStyle = "Darkred";
    context1.fill();
    context1.beginPath();
    context1.fillStyle = "Black";
    context1.moveTo(250, 100);
    context1.lineTo(150, 250);
    context1.lineTo(350, 250);
    context1.closePath();
    context1.strokeStyle = "#Black";
    context1.stroke();
    context1.fill();
    /*
    // Image
    context1.moveTo(38, 130);
    context1.lineTo(73, 194);
    context1.moveTo(71, 190);
    context1.lineTo(110, 136);
    context1.moveTo(109, 136);
    context1.lineTo(149, 188);
    context1.moveTo(149, 188);
    context1.lineTo(186, 127);
    context1.moveTo(209.5, 155.5 - 28.5);

    context1.bezierCurveTo(209.5 + (0.5522847498307936 * -24.5), 155.5 - 28.5,  209.5 + -24.5, 155.5 - (0.5522847498307936 * 28.5), 209.5 + -24.5, 155.5);
    context1.bezierCurveTo(209.5 + -24.5, 155.5 + (0.5522847498307936 * 28.5), 209.5 + (0.5522847498307936 * -24.5), 155.5 + 28.5, 209.5, 155.5 + 28.5);
    context1.bezierCurveTo(209.5 - (0.5522847498307936 * -24.5), 155.5 + 28.5, 209.5 - -24.5, 155.5 + (0.5522847498307936 * 28.5), 209.5 - -24.5, 155.5);
    context1.bezierCurveTo(209.5 - -24.5, 155.5 - (0.5522847498307936 * 28.5), 209.5 - (0.5522847498307936 * -24.5), 155.5 - 28.5, 209.5, 155.5 - 28.5);
    
    context1.moveTo(234, 154);
    context1.lineTo(233, 231);
    context1.moveTo(232, 226);
    context1.lineTo(189, 225);
    context1.moveTo(189, 223);
    context1.lineTo(189, 201);
    context1.moveTo(248, 131);
    context1.lineTo(247, 225);
    context1.moveTo(308, 159.5 - 22.5);

    context1.bezierCurveTo(308 + (0.5522847498307936 * 60), 159.5 - 22.5,  308 + 60, 159.5 - (0.5522847498307936 * 22.5), 308 + 60, 159.5);
    context1.bezierCurveTo(308 + 60, 159.5 + (0.5522847498307936 * 22.5), 308 + (0.5522847498307936 * 60), 159.5 + 22.5, 308, 159.5 + 22.5);
    context1.bezierCurveTo(308 - (0.5522847498307936 * 60), 159.5 + 22.5, 308 - 60, 159.5 + (0.5522847498307936 * 22.5), 308 - 60, 159.5);
    context1.bezierCurveTo(308 - 60, 159.5 - (0.5522847498307936 * 22.5), 308 - (0.5522847498307936 * 60), 159.5 - 22.5, 308, 159.5 - 22.5);
    
    // NOT WORKING
    */
    // Exercise 3: B to G - REST OF THE EXERCISES
    console.log("Exercise 3: B to G - REST OF THE EXERCISES");
    let canvas2 = document.getElementById("canvas2");
    let context2 = canvas2.getContext("2d");
    class Rectangle {
        constructor(_width, _height, _xcord, _ycord, _swidth, _colorF, _colorS) {
            this.m1 = (Math.random() + (Math.random() - 1));
            this.m2 = (Math.random() + (Math.random() - 1));
            this.width = _width;
            this.height = _height;
            this.xcord = _xcord;
            this.ycord = _ycord;
            this.swidth = _swidth;
            this.colorF = _colorF;
            this.colorS = _colorS;
            if (_width || _width || _ycord || _xcord || _swidth || _colorF || _colorS == undefined) {
                this.width = Math.floor(Math.random() * (canvas2.width));
                this.height = Math.floor(Math.random() * (canvas2.height) / 2);
                this.xcord = Math.floor(Math.random() * (canvas2.width) / 10);
                this.ycord = Math.floor(Math.random() * (canvas2.height) / 2);
                this.swidth = Math.floor(Math.random() * 20);
                this.colorF = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
                this.colorS = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
            }
        }
        drawRect() {
            context2.beginPath();
            context2.fillStyle = this.colorF;
            context2.rect(this.xcord, this.ycord, this.width, this.height);
            context2.fill();
            context2.lineWidth = this.swidth;
            context2.strokeRect(this.xcord, this.ycord, this.width, this.height);
            context2.strokeStyle = this.colorS;
            context2.stroke();
            context2.closePath();
        }
        moveRect() {
            this.xcord *= this.m1;
            this.ycord *= this.m2;
            this.width *= this.m1;
            this.height *= this.m2;
        }
    }
    let objArr = [];
    for (let r in objArr) {
        objArr[r].drawRect();
    }
    setInterval(function () {
        context2.clearRect(0, 0, canvas2.width, canvas2.height);
        for (let rect of objArr) {
            rect.moveRect();
            rect.drawRect();
        }
    }, 1 / 60);
    setInterval(function () {
        objArr = [];
        for (let i = 0; i < 20; i++) {
            let r = new Rectangle(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            objArr.push(r);
        }
    }, 10);
    // EXTRA
    console.log("Exercise 3: B to G - REST OF THE EXERCISES");
    let canvas3 = document.getElementById("canvas3");
    let context3 = canvas3.getContext("2d");
    class Rectangle2 {
        constructor(_width, _height, _xcord, _ycord, _swidth, _colorF, _colorS) {
            this.m1 = (Math.random() + (Math.random() - 1));
            this.m2 = (Math.random() + (Math.random() - 1));
            this.width = _width;
            this.height = _height;
            this.xcord = _xcord;
            this.ycord = _ycord;
            this.swidth = _swidth;
            this.colorF = _colorF;
            this.colorS = _colorS;
            if (_width || _width || _ycord || _xcord || _swidth || _colorF || _colorS == undefined) {
                this.width = Math.floor(Math.random() * (canvas3.width));
                this.height = Math.floor(Math.random() * (canvas3.height) / 2);
                this.xcord = Math.floor(Math.random() * (canvas3.width) / 10);
                this.ycord = Math.floor(Math.random() * (canvas3.height) / 2);
                this.swidth = Math.floor(Math.random() * 20);
                this.colorF = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
                this.colorS = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
            }
        }
        drawRect() {
            context3.beginPath();
            context3.fillStyle = this.colorF;
            context3.rect(this.xcord, this.ycord, this.width, this.height);
            context3.fill();
            context3.lineWidth = this.swidth;
            context3.strokeRect(this.xcord, this.ycord, this.width, this.height);
            context3.strokeStyle = this.colorS;
            context3.stroke();
            context3.closePath();
        }
        moveRect() {
            this.xcord += this.m1;
            this.ycord += this.m2;
            this.width %= this.m1;
            this.height %= this.m2;
        }
    }
    let objArr2 = [];
    for (let r in objArr2) {
        objArr2[r].drawRect();
    }
    setInterval(function () {
        context3.clearRect(0, 0, canvas2.width, canvas2.height);
        for (let rect of objArr2) {
            rect.moveRect();
            rect.drawRect();
        }
    }, 1 / 60);
    setInterval(function () {
        objArr2 = [];
        for (let i = 0; i < 20; i++) {
            let r = new Rectangle2(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            objArr2.push(r);
        }
    }, 10);
})(E21 || (E21 = {}));
//# sourceMappingURL=E2.2_script.js.map