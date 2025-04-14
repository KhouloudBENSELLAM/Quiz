document.getElementById('sentbtn').addEventListener('click', function () {
    var res = document.getElementById('res')
    var checked = false
    var Score=0

    for (var elt of document.getElementsByName('reponse')) {
        if (elt.checked) {
            checked = true
            if(elt.checked && elt.value == 'r4'){
                Score+=2
            }
            break
        }
    }

    for (var elt of document.getElementsByName('reponse1')) {
        if (elt.checked) {
            checked = true
            if(elt.checked && elt.value == 'r44'){
                Score+=2
            }
            break
        }
    }

    for (var elt of document.getElementsByName('reponse2')) {
        if (elt.checked) {
            checked = true
            if(elt.checked && elt.value == 'r333'){
                Score+=2
            }
            break
        }
    }

    for (var elt of document.getElementsByName('reponse3')) {
        if (elt.checked) {
            checked = true
            if(elt.checked && elt.value == 'r3333'){
                Score+=2
            }
            break
        }
    }
    for (var elt of document.getElementsByName('reponse4')) {
        if (elt.checked) {
            checked = true
            if(elt.checked && elt.value == 'r22222'){
                Score+=2
            }
            break
        }
    }

    if (checked) {
        res.innerHTML = 'Thank you for your responses!';
        window.location.href=`pageinfo.html?score=${Score}`
    } else {
        res.innerHTML = 'All questions should be checked!';
    }
});

document.getElementById('answer1').addEventListener('click',function(){
    document.getElementById('correct1').style="display:block;"
    res1=document.getElementById('correct1')
    res1.innerHTML=`Tim Berners-Lee`
    res1.style="color:lightgreen;text-align:left;"
})
document.getElementById('answer2').addEventListener('click',function(){
    document.getElementById('correct2').style="display:block;"
    res1=document.getElementById('correct2')
    res1.innerHTML=`None of these`
    res1.style="color:lightgreen;text-align:left;"
})
document.getElementById('answer3').addEventListener('click',function(){
    document.getElementById('correct3').style="display:block;"
    res1=document.getElementById('correct3')
    res1.innerHTML=`Cascad style sheet`
    res1.style="color:lightgreen;text-align:left;"
})
document.getElementById('answer4').addEventListener('click',function(){
    document.getElementById('correct4').style="display:block;"
    res1=document.getElementById('correct4')
    res1.innerHTML=`container tag`
    res1.style="color:lightgreen;text-align:left;"
})
document.getElementById('answer5').addEventListener('click',function(){
    document.getElementById('correct5').style="display:block;"
    res1=document.getElementById('correct5')
    res1.innerHTML=`After the table is loaded`
    res1.style="color:lightgreen;text-align:left;"
})

