document.getElementById("cal").onclick = function(){
 let sub1,sub2,sub3,sub4,sub5;
 sub1 = Number(document.getElementById("subject-1").value) ;

 console.log("//MARKS OF 5 SUBJECTS//");

 console.log("Mark of English:",sub1);

 sub2 = Number(document.getElementById("subject-2").value);
 console.log("Mark of Physics",sub2);

sub3 = Number(document.getElementById("subject-3").value);
console.log("Mark of Chemistry:",sub3);

sub4 = Number(document.getElementById("subject-4").value);
console.log("Mark of Biology:",sub4);

sub5 = Number(document.getElementById("subject-5").value);
console.log("Mark of ICT:",sub5);

console.log("............................    ");

console.log("OUTPUT MARKS:")

let totalMark;
totalMark = (sub1+sub2+sub3+sub4+sub5); 
console.log("Total marks:",totalMark);

let averageMark;
averageMark = (totalMark / 5);
console.log("Average Marks:",averageMark);

let percentageMark;
percentageMark = (totalMark / 500) * 100;
console.log("Percentage Marks:",percentageMark,"%");

let finalGrade;
finalGrade = gradecal(percentageMark);
console.log("Final Garde:",finalGrade);

console.log("............................    ");


console.log("GRADE SCALE:");
function gradecal(marks) {
    let grade;
    if(marks>100||marks<0) window.alert("Your entered number is not correct");
    if (marks >= 90 && marks <= 100) grade = "A";
    else if (marks >= 80 && marks <= 89) grade = "B";
    else if (marks >= 70 && marks <= 79) grade = "C";
    else if (marks >= 60 && marks <= 69) grade = "D";
    else grade = "F";

  return grade;
}

console.log("Grade of English:",gradecal(sub1));
console.log("Grade of Physics:",gradecal(sub2));
console.log("Grade of Chemistry:",gradecal(sub3));
console.log("Grade of Biology:",gradecal(sub4));
console.log("Grade of ICT:",gradecal(sub5));
}