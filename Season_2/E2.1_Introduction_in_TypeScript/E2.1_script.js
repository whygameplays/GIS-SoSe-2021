"use strict";
// STRG + SHIFT + B
// Exercise 1 - BASICS:
console.log("Exercise 1: A - Basics");
console.log("Hallo Welt");
function e1a() {
    let x = "Alles";
    console.log(x);
    fe1a();
    console.log("Logo!");
}
function fe1a() {
    console.log("Klar?");
}
// Exercise 1 - A:
// Aufgabe: Alles suppi? - Haja logo! - Klaro!
//   -> Es wird zuerst die Funktion a1() ausgeführt, wodurch der Befehl console.log(x).
//      Anschließend wird x = "Alles suppi?" ausgegeben.
//      Als nächstes wird die Funktion funce1a() aufgerufen und es wird in der Console "Haja logo!"" azsgegeben.
// Valid vraiables: Für die Variable x kann prinzipiell jede x beliebiege Variable eingesezt - dies funktioniert nur, solange der Variablentyp zur Ausgabe passt und nicht ein boolean einen sting zur ausgabe bekomme
//  Exercise 1 - B:
//  console.log("Aufgabe 1: B - basiert auf der selben Reihnfolge wie Aufgabe 1 A");
//  -> Exercise 1 - C:
console.log("Exercise 1: C - Basics");
function e1c() {
    fe1c();
    console.log("Gute");
    fe1c();
    console.log("Klar?");
    fe1c();
    console.log("Logo");
}
e1c();
function fe1c() {
    console.log("Alles!");
}
//  Exercise 2 - Continuous variable manipulation
console.log("Exercise 2: Continuous variable manipulation");
function e2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
e2();
// In der Console wird von 9 bis 1 heruntergezählt
//   -> i wird der Wert 9 zugewiesen und anschließen wird mit do eine Funktion aufgerufen,
//      welche solange i - 1 machen wie i > 0 ist
//  Exercise 3 - Learn how to recognize mistakes and learn to avoid them
//   -> Diese Aufgabe ist falsch umd damit ERRORS beim Ausführen des gesamten Scripts vermieden werden ist dieser Codeabschnit auskommentiert
console.log("Exercise 3: Learn how to recognize mistakes and learn to avoid them");
/*
function e1a(): void {
    let x: boolean = "Alles";
    console.log(y);
    te1a();
    console.log("Logo!");
}

function fe1a(): void {
    console.log("Klar?");
}



function e1c(): int {
    fe1c();
    console.log("Gute");

    fe1c(x);
    console.log("Klar?");

    fe1c();
    consolelog("Logo");
}

a1c();

function te1c(); void {
    console.log("Alles!");
}



function e2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0):
}

a2();
*/
//  Exercise 4 - Global vs local
console.log("Exercise 4: Global vs local");
let x = "Hallo";
console.log(x);
fe41(x);
console.log(x);
fe42();
fe43();
console.log(x);
function fe41(y) {
    y = "Bla";
    console.log(y);
}
function fe42() {
    let x = "Blubb";
    console.log(x);
}
function fe43() {
    x = "Test";
}
// Exercise 4 - A:
// Annahme: Es wird zu der Ausgabe: "Hallo" "Bla" "Hallo" "Blubb" "Test" kommen
//   -> Der Variable x wird zuerst der string "Hallo" zugewiesen und anschließend per console.log(x) ausgegeben
//      Als nächstes wird die Funktion func1 aufgerufen bei welcher der Wert für x an die Funktion func1 übergeben wir wird. Anschließend wird "Hallo" wird durch "Bla" ersetzt und ausgegeben
//      Als nnächstes wird func2 ausgeführt und eine neue lokale Variable x erstellt. Die beiden Variablen mit dem Name x können koexistieren, da die eine eine lokale und die andere eine globale Variable ist und diese damit unabhängig von einander sind.
//      Der lokalen Variable x wird der string "Blubb" zugewiesen und anschließend wieder ausgegeben
//      Die letzte Funktion: func3 überschreibt die gloable Variable x mit dem string "Test" und gibt ihn in der Console aus
// Exercise 4 - B:
//   -> Gloable Variablen:
//      - Können von jeder beliebigen Stelle im gesamten Progamm/Code aufgerufen werden (auch von allen Subroutinen aus)
//      - Sowohl lesender als auch schreibender Zugriff ist möglich
//      - Sinvoll nur wenn sie nicht überall im Code benötigt werden da sonst leicht fehler auftreten können durch die darüber genannte Eigenschaft
//   -> Loakale Variablen:
//      - Entspricht der Idee der modularen Programmierung - sorgt dafür, dass man sich sich sicher sein kann, dass kein Wert des angeschlossenen Teilprogramms von außerhalb des Teils geändert werden kann
//      - Erleichtert die Fehlersuche - z.B wenn mehrere Teile eines größeren Programms von mehreren Personen geschrieben wurden
//   -> Übergabeparameter:
//      - Sind Parameter, welche nach dem Prinzip "call by value" übergeben werden
//      - Parameter sind Vorgabewerte, welche in diesem Fall an z.B. eine andere Funktion übergeben werden
//      - Sie können als Speicher oder auch nur als Zwischenspeicher von Werden agieren
//   -> Variablen:
//      - Variablen (int, boolean, string, ...) sind Namen für verschiedenen Variablentypen, welche benutzen werden um einen oder mehrere Werte zu halten (speichern)
//      - Dadruch muss der gewünschte Wert nicht mehrfach eigegeben werden sonder lediglich die Variable
//      - Eine Variable kann z.B die Ergebnisse eine Rechnung, einen Datanbankaufruf oder noch viele mehr enthalten (speichern)
//   -> Funktionen:
//      - Funktionen sind selbst beinhaltende code modules für eine bestimmte Aufgabe
//      - Häufigste Aufgabe von Funktionen: "take in" - "process" - "return a result"
//      - Eine Funktion kann immerwieder aufgerufen werden
//      - Funktionen werden von anderen Funktionen aufgrufen
// Exercise 5 - Loops, functions and other control structures:
// Exercise 5 - A:
console.log("Exercise 5 - A: MULTIPLY");
function multiply(a, b) {
    return a * b;
}
let a = 8;
let b = 8;
console.log(multiply(a, b));
// Exercise 5 - B:
console.log("Exercise 5 - B: MAX VALUE");
function max(a, b) {
    if (a > b) {
        console.log(a);
        return a;
    }
    console.log(b);
    return b;
}
max(10, 25);
// Exercise 5 - C:
console.log("Exercise 5 - C: ADD UP VALUES FROM 0 TO 100");
function wayto100() {
    let result = 0;
    let i = 0;
    while (i <= 100) {
        result += i;
        i++;
    }
    console.log(result);
}
wayto100();
// Exercise 5 - D:
console.log("Exercise 5 - D: 10 RANDOM NUMBERS");
function randoooom2values() {
    for (let i = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 100));
    }
}
randoooom2values();
// Exercise 5 - E:
console.log("Exercise 5 - FACULTY");
function faculty(v) {
    if (v < 1) {
        return 1;
    }
    else {
        let output = 1;
        for (let i = 2; i <= v; i++) {
            output *= i;
        }
        return output;
    }
}
console.log(faculty(8));
// Exercise 5 - F:
console.log("Exercise 5 - F: LEAP YEARS");
function leapyears() {
    let y = 1900;
    while (y < 2021) {
        if (y % 4 == 0 && y % 400 == 0 && y % 100 != 0) {
            console.log(y);
        }
        y++;
    }
}
leapyears();
// Exercise 6 - More loops and functions:
// Exercise 6 - A:
console.log("Exercise 6 - A: #");
function HASHtag() {
    for (let i = 1; i <= 7; i++) {
        let output = "#";
        for (let j = 1; j <= i; j++) {
            output += "#";
        }
        console.log(output);
    }
}
HASHtag();
// Exercise 6 - B and C:
console.log("Exercise 6 - B and C: FIZZZZnBUZZZZ");
function FIZZnBUZZ() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("FIZZZZ");
        }
        else if (i % 3 != 0 && i % 5 == 0) {
            console.log("BUZZZZ");
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZZZnBUZZZZ");
        }
        else {
            console.log(i);
        }
    }
}
FIZZnBUZZ();
// Exercise 6 - D and E:
console.log("Exercise 6 - D: CHECKERBOARD + customeizabullito xD");
function chesscheckerboard(height, width) {
    let output = "";
    for (let i = 0; i < height; i++) {
        if (i % 2 == 0) {
            for (let k = 0; k < width; k++) {
                if (k % 2 == 0) {
                    output += " ";
                }
                else {
                    output += "#";
                }
            }
        }
        else {
            for (let k = 0; k < width; k++) {
                if (k % 2 == 0) {
                    output += "#";
                }
                else {
                    output += " ";
                }
            }
        }
        output += "\n";
    }
    console.log(output);
}
chesscheckerboard(25, 50);
//# sourceMappingURL=E2.1_script.js.map