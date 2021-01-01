// ex5. 노드속성변경
window.addEventListener("load", function(){   
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect = section5.querySelector(".select-img");
    var changeBtn = section5.querySelector(".change-btn");
    var RollBackBtn = section5.querySelector(".rollback-btn");
    var img01 = section5.querySelector(".img01");
    
    changeBtn.onclick = function(){
        img01.src = imgSelect.value;
    };

});

// ex4. 노드 선택 : childnode, children 
window.addEventListener("load", function(){   
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector("#box");
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello 안녕";
    input2.value = "byebye 잘가";

});



window.addEventListener("load", function(){   
    var section3 = document.querySelector("#section3");
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var addResult = section3.querySelector(".add-result");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        addResult.value = x+y;
    };
});

asddsa{
   sad 
}