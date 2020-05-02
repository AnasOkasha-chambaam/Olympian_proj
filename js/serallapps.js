



  $(document).ready((e) => {
    $('.modal').modal();
  })
  class UIA {
static testView(x, y){
var elmnts = Array.from(document.querySelectorAll(x)),
position,
windowHeigh = window.innerHeight;

elmnts.forEach((elmnt) => {
position = elmnt.getBoundingClientRect().top;
if(position - windowHeigh <= 10){
  elmnt.classList.add(y)
  
}
})
}

}
function test(){
UIA.testView('.six-anim-this', 'anim-here')
}
window.addEventListener('scroll', test );
// fot the app


$(document).ready(function () {
$('.dropdown-button').dropdown({
  constrainWidth: false,
  hover: true,
  belowOrigin: true,
  alignment: 'left'
});

// JAVASCRIPT START HERE 

// INIT SELECT LIST
$('select').material_select();

});

function msystem() {
if ($('#msf')[0].value == 'metric') {
  $('#thf')[0].innerHTML = ' (Cms)';
  $('#tneck')[0].innerHTML = ' (Cms)';
  $('#twaist')[0].innerHTML = ' (Cms)';
  $('#thips')[0].innerHTML = ' (Cms)';
} else {
  $('#thf')[0].innerHTML = ' (inches)';
  $('#tneck')[0].innerHTML = ' (inches)';
  $('#twaist')[0].innerHTML = ' (inches)';
  $('#thips')[0].innerHTML = ' (inches)';
}
;
$('select').material_select();
}
function bfat() {
var ms = $('#msf')[0].value;
var sex = $('#sf')[0].value;
var height = $('#hf')[0].value;
var neck = $('#neck')[0].value;
var waist = $('#waist')[0].value;
var hips = $('#hips')[0].value;
var ibf;
var bfc;
if (height == null || height == 0 || neck == null || neck == 0 || waist == null || waist == 0) {
  $('#bf')[0].classList.add('red');
  $('#bf')[0].classList.add('white-text');
  $('#bf')[0].value = "Pleas insert numbers.";
} else {
  $('#bf')[0].classList.remove('red');
  $('#bf')[0].classList.remove('white-text');
  $('#bf')[0].value = "";
}
if (ms == 'metric' && sex == 'm' && height > 0 && waist > 0 && neck > 0) {
  ibf = Math.round((86.010 * (Math.log(waist * 1 - neck * 1) / Math.log(10)) - 70.041 * (Math.log(height) / Math
    .log(10)) + 30.30 * 1) * 100) / 100;
  if (ibf <= 5) {
    bfc = 'Essential';
  } else if (ibf > 5 && ibf <= 17) {
    bfc = 'Fit';
  } else if (ibf > 17 && ibf <= 25) {
    bfc = 'Acceptable';
  } else if (ibf > 25) {
    bfc = 'Obese';
  }
  switch (isNaN(ibf)) {
    case true:
  $('#bf')[0].classList.add('red');
  $('#bf')[0].classList.add('white-text');
  $('#bf')[0].value = `Numbers are not right`;
      break;
  
    default:
  $('#bf')[0].classList.remove('red');
  $('#bf')[0].classList.remove('white-text');
  $('#bf')[0].value = ibf + " % ";
  $('#nbf')[0].value = bfc;
      break;
  }


} else if (ms == 'us' && sex == 'm' && height > 0 && waist > 0 && neck > 0) {
  ibf = Math.round((86.010 * (Math.log(waist * 1 - neck * 1) / Math.log(10)) - 70.041 * (Math.log(height) / Math
    .log(10)) + 36.76 * 1) * 100) / 100;
  if (ibf <= 5) {
    bfc = 'Essential';
  } else if (ibf > 5 && ibf <= 17) {
    bfc = 'Fit';
  } else if (ibf > 17 && ibf <= 25) {
    bfc = 'Acceptable';
  } else if (ibf > 25) {
    bfc = 'Obese';
  }
  switch (isNaN(ibf)) {
    case true:
  $('#bf')[0].classList.add('red');
  $('#bf')[0].classList.add('white-text');
  $('#bf')[0].value = `Numbers are not right`;
      break;
  
    default:
  $('#bf')[0].classList.remove('red');
  $('#bf')[0].classList.remove('white-text');
  $('#bf')[0].value = ibf + " % ";
  $('#nbf')[0].value = bfc;
      break;
  }

} else if (ms == 'metric' && sex == 'f' && height > 0 && waist > 0 && neck > 0) {
  ibf = Math.round((163.205 * (Math.log(waist * 1 + hips * 1 - neck * 1) / Math.log(10)) - 97.684 * (Math.log(
    height) / Math.log(10)) - 104.912 * 1) * 100) / 100;
  if (ibf <= 15) {
    bfc = 'Essential';
  } else if (ibf > 15 && ibf <= 24) {
    bfc = 'Fit';
  } else if (ibf > 24 && ibf <= 31) {
    bfc = 'Acceptable';
  } else if (ibf > 31) {
    bfc = 'Obese';
  }
  switch (isNaN(ibf)) {
    case true:
  $('#bf')[0].classList.add('red');
  $('#bf')[0].classList.add('white-text');
  $('#bf')[0].value = `Numbers are not right`;
      break;
  
    default:
  $('#bf')[0].classList.remove('red');
  $('#bf')[0].classList.remove('white-text');
  $('#bf')[0].value = ibf + " % ";
  $('#nbf')[0].value = bfc;
      break;
  }

} else if (ms == 'us' && sex == 'f' && height > 0 && waist > 0 && neck > 0) {
  ibf = Math.round((163.205 * (Math.log(waist * 1 + hips * 1 - neck * 1) / Math.log(10)) - 97.684 * (Math.log(
    height) / Math.log(10)) - 78.387 * 1) * 100) / 100;
  if (ibf <= 15) {
    bfc = 'Essential';
  } else if (ibf > 15 && ibf <= 24) {
    bfc = 'Fit';
  } else if (ibf > 24 && ibf <= 31) {
    bfc = 'Acceptable';
  } else if (ibf > 31) {
    bfc = 'Obese';
  }
  switch (isNaN(ibf)) {
    case true:
  $('#bf')[0].classList.add('red');
  $('#bf')[0].classList.add('white-text');
  $('#bf')[0].value = `Numbers are not right`;
      break;
  
    default:
  $('#bf')[0].classList.remove('red');
  $('#bf')[0].classList.remove('white-text');
  $('#bf')[0].value = ibf + " % ";
  $('#nbf')[0].value = bfc;
      break;
  }

}
}
let fstBmi = 0 ;
function mybfat() {
let fstfatperc = 0;
let fstage = $('#fstbmiage')[0].value;

bmass('#fstmsm', `#fsthm`, `#fstwm`, `#fstbmiage`, '#bf', '#fstnbf');
if (fstBmi != 0) {
fstfatperc = ((1.2*fstBmi) + (0.23*($('#fstbmiage')[0].value)) - 16.2)
if ($('#fstsf')[0].value == 'm'){

$('#bf')[0].value = fstfatperc.toFixed(2) + ' %'
  switch (true) {
    case (fstage > 0 && fstage < 40): 
      switch(true) {
        case (fstfatperc < 8):  $('#fstnbf')[0].value = ' Underfat'; break;
        case (fstfatperc >= 8 && fstfatperc < 19):  $('#fstnbf')[0].value = ' Healthy'; break;
        case (fstfatperc >= 19 && fstfatperc < 25):  $('#fstnbf')[0].value = ' Overweight'; break;
        case (fstfatperc >= 25):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
    case (fstage >= 40 && fstage < 60): 
      switch(true) {
        case (fstfatperc < 11):  $('#fstnbf')[0].value = ' Underfat'; break;
        case (fstfatperc >= 11 && fstfatperc < 22):  $('#fstnbf')[0].value = ' Healthy'; break;
        case (fstfatperc >= 22 && fstfatperc < 27):  $('#fstnbf')[0].value = ' Overweight'; break;
        case (fstfatperc >= 27):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
    case (fstage >= 60): 
      switch(true) {
        case (fstfatperc < 13):  $('#fstnbf')[0].value = ' Underfat'; break;
        case (fstfatperc >= 13 && fstfatperc < 25):  $('#fstnbf')[0].value = ' Healthy'; break;
        case (fstfatperc >= 25 && fstfatperc < 30):  $('#fstnbf')[0].value = ' Overweight'; break;
        case (fstfatperc >= 30):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
  }

} else if ($('#fstsf')[0].value == 'f') {        
  $('#bf')[0].value = (fstfatperc + 10.8).toFixed(2) + ' %';
  switch (true) {
    case (fstage > 0 && fstage < 40): 
      switch(true) {
        case ((fstfatperc + 10.8) < 21):  $('#fstnbf')[0].value = ' Underfat'; break;
        case ((fstfatperc + 10.8) >= 21 && (fstfatperc + 10.8) < 33):  $('#fstnbf')[0].value = ' Healthy'; break;
        case ((fstfatperc + 10.8) >= 33 && (fstfatperc + 10.8) < 39):  $('#fstnbf')[0].value = ' Overweight'; break;
        case ((fstfatperc + 10.8) >= 39):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
    case (fstage >= 40 && fstage < 60): 
      switch(true) {
        case ((fstfatperc + 10.8) < 23):  $('#fstnbf')[0].value = ' Underfat'; break;
        case ((fstfatperc + 10.8) >= 23 && (fstfatperc + 10.8) < 35):  $('#fstnbf')[0].value = ' Healthy'; break;
        case ((fstfatperc + 10.8) >= 35 && (fstfatperc + 10.8) < 40):  $('#fstnbf')[0].value = ' Overweight'; break;
        case ((fstfatperc + 10.8) >= 40):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
    case (fstage >= 60): 
      switch(true) {
        case ((fstfatperc + 10.8) < 24):  $('#fstnbf')[0].value = ' Underfat'; break;
        case ((fstfatperc + 10.8) >= 24 && (fstfatperc + 10.8) < 36):  $('#fstnbf')[0].value = ' Healthy'; break;
        case ((fstfatperc + 10.8) >= 36 && (fstfatperc + 10.8) < 42):  $('#fstnbf')[0].value = ' Overweight'; break;
        case ((fstfatperc + 10.8) >= 42):  $('#fstnbf')[0].value = ' Obese'; break;
      };
    break;
  }

}
}
}
  // the sec app

  function getBMImsg(bmi) {
var bmiTable = [{
    bmi: 10,
    msg: "You are underweight"
  },
  {
    bmi: 15,
    msg: "You are underweight"
  },
  {
    bmi: 18.5,
    msg: "You are underweight"
  },
  {
    bmi: 25,
    msg: "You are healthy!"
  },
  {
    bmi: 30,
    msg: "You are overweight"
  },
  {
    bmi: 40,
    msg: "You are obese!"
  },
  {
    bmi: 50,
    msg: "You are obese!"
  }
];
var i;
var text = bmiTable[0].msg;
for (i = 0; i < bmiTable.length; i++) {
  if (bmi < bmiTable[i].bmi) {
    text = bmiTable[i].msg;
    break;
  }
}
return text;
}

function fstmsystembmi() {

if ($('#fstmsm')[0].value == 'metric') {
  $('#fstthm')[0].innerHTML = ' (Cms)';
  $('#fsttwm')[0].innerHTML = ' (Kgs)';
} else {
  $('#fstthm')[0].innerHTML = ' (inches)';
  $('#fsttwm')[0].innerHTML = ' (lbs)';
};

}
function msystembmi() {

if ($('#msm')[0].value == 'metric') {
  $('#thm')[0].innerHTML = ' (Cms)';
  $('#twm')[0].innerHTML = ' (Kgs)';
} else {
  $('#thm')[0].innerHTML = ' (inches)';
  $('#twm')[0].innerHTML = ' (lbs)';
};

}

function bmass(one, two, three, four, five, six) {
let myBmi = 0;
var ms = $(one)[0].value;
var height = $(two)[0].value;
var weight = $(three)[0].value;
let bmiage = $(four)[0].value;
if (height == null || height.length == 0 || weight == null || weight.length == 0 || bmiage == null || bmiage.length == 0 || bmiage == null || bmiage == 0) {
  $(five)[0].classList.add('red');
  $(five)[0].classList.add('white-text');
  $(five)[0].value = "Pleas insert numbers.";
} else {
  $(five)[0].classList.remove('red');
  $(five)[0].classList.remove('white-text');
  $(five)[0].value = "";
}
if (ms == 'metric' && height > 0 && bmiage > 0) {
  myBmi = (Math.round(weight / (height * height / 10000) * 100) / 100);
  if (five == '#bmi') {
    document.getElementById('ideal-weight-msg').innerHTML = `
    <p>Healthy weight range for your height:</p>
    <p><span class="min-weight">${((18.5 * height * height)/10000).toFixed(1)}</span> kg - <span class="max-weight">${((25 * height * height)/10000).toFixed(1)}</span> kg</p>
    `
  }
  $(five)[0].value = myBmi + " kg/m2 ";
  $(six)[0].value = getBMImsg(myBmi)
} else if (ms == 'us' && height > 0 && bmiage > 0) {
  myBmi = (Math.round(703 * weight / (height * height) * 100) / 100);
  if (five == '#bmi') {
    document.getElementById('ideal-weight-msg').innerHTML = `
    <p>Healthy weight range for your height:</p>
    <p><span class="min-weight">${((((18.5 * (height * 2.54) * (height * 2.54))/10000) * 2.205).toFixed(1))}</span> lbs - <span class="max0">${((((25 * (height * 2.54) * (height * 2.54))/10000) * 2.205).toFixed(1))}</span> lbs</p>
    `
  }
  $(five)[0].value = myBmi + " kg/m2 ";
  $(six)[0].value = getBMImsg(myBmi)
} else {
  $(five)[0].value = "Please enter data.";
}
fstBmi = myBmi;
}


  // THIRD APP CODE
  let usedUnits = 2,
  wtInput = document.getElementById('wm-macc'),
  heightInput = document.getElementById('hm-macc'),
  ageInput = document.getElementById('age-macc');
let   REEEq = 0,
    TDEEF = 0,
    TDEE = 0,
    finalCal = 0,
    finalFat = 0,
    protF = 0,
    finalProt = 0,
    finalCarbo =0;
function msystemmacc() {
const unitSel = (document.getElementById('msm-macc')),
    weightUnit = document.getElementById('twm-macc'),
    lengthUnit = document.getElementById('thm-macc');
switch (unitSel.value) {
case "us": weightUnit.innerHTML = '(lbs)';lengthUnit.innerHTML = '(inch)';usedUnits = 1;
 break;
case "metric": weightUnit.innerHTML = '(Kg)';lengthUnit.innerHTML = '(cm)';usedUnits = 2;
 break;
}
}
function changeREEEq() {
let REE = 0;
switch (usedUnits) {
case 2: REE = ((10 * parseFloat(wtInput.value)) + (6.25 * parseFloat(heightInput.value)) - (5 * parseFloat(ageInput.value)) + 5); break;
case 1: REE = ((10 * (parseFloat(wtInput.value) / 2.205)) + (6.25 * (parseFloat(heightInput.value) * 2.54)) - (5 * parseFloat(ageInput.value)) + 5);
}


const gendSel = document.getElementById('sf-macc');
switch (gendSel.value) {
case "m" : REEEq = REE; break;
case "f" : REEEq = (REE - 166); break;
}
}
function TDEEChangeF() {
const TDEEFSel = document.getElementById('activity-level');
    TDEEF = (parseFloat(TDEEFSel.value));
}
function FinalEq() {
TDEE = TDEEF * REEEq;
}
function protChangeF() {
protF = parseFloat(document.querySelector('input[name="prot"]:checked').value)
  
}
msystemmacc();
changeREEEq();
function getRes(e) {
document.getElementById('loader').innerHTML = ``;
if (isNaN(parseFloat(wtInput.value)) || isNaN(parseFloat(heightInput.value)) || isNaN(parseFloat(ageInput.value))) {
document.getElementById('third-app-msg').textContent = 'Please, enter data first.';
} else {
document.getElementById('third-app-msg').textContent = '';
const goalsFRadio = document.querySelector('input[name="goals"]:checked');
let   goalsF = parseFloat(goalsFRadio.value);
msystemmacc();
changeREEEq();
TDEEChangeF();
protChangeF();
FinalEq();
      finalCal = TDEE * goalsF;
      finalFat = ((0.30) * finalCal) / 9;
      switch (usedUnits) {
        case 2: finalProt = (protF * (parseFloat(wtInput.value) * 2.205)); break;
        case 1: finalProt = (protF * (parseFloat(wtInput.value))); break;
      }
      // finalProt = (protF * (parseFloat(wtInput.value) * 2.205));
      finalCarbo = (finalCal - (finalProt * 4) - (finalFat * 9))/4;
document.getElementById('total-cal').innerHTML = Math.ceil(finalCal);
document.getElementById('final-carbo').innerHTML = Math.ceil(finalCarbo);
document.getElementById('carbo-percent').innerHTML = (((finalCarbo * 4) / finalCal) * 100).toFixed(1);
document.getElementById('final-prot').innerHTML = Math.round(finalProt);
document.getElementById('prot-percent').innerHTML = (((finalProt * 4) / finalCal) * 100).toFixed(1);
document.getElementById('final-fat').innerHTML = Math.round(finalFat);
document.getElementById('fat-percent').innerHTML = (((finalFat * 9) / finalCal) * 100).toFixed(1);
}

}
document.getElementById('calculate-macc').addEventListener('click', (e) => {
e.preventDefault();
let ev = e;
document.getElementById('loader').innerHTML = `<img src="img/loading.gif" style="width: 60px;
        margin: auto;
        display: block;">`;
setTimeout(() => {getRes(ev)}, 400);

})
