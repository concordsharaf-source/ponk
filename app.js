/* =====================================================
   APP.JS
   الخدمات المصرفية الإلكترونية
===================================================== */


document.addEventListener("DOMContentLoaded", function(){



/* =====================================================
   LANGUAGE BUTTON
===================================================== */


const langBtn = document.getElementById("langBtn");


if(langBtn){

    langBtn.addEventListener("click", function(){

        if(document.documentElement.lang === "ar"){

            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";

            langBtn.innerHTML = "🌐 العربية";

        }else{

            document.documentElement.lang = "ar";
            document.documentElement.dir = "rtl";

            langBtn.innerHTML = "🌐 English";

        }

    });

}



/* =====================================================
   LOGOUT BUTTON
===================================================== */


const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){

    logoutBtn.addEventListener("click",function(){

        let confirmLogout = confirm(
            "هل تريد تسجيل الخروج؟"
        );


        if(confirmLogout){

            alert(
                "تم تسجيل الخروج بنجاح"
            );


            window.location.href="login.html";

        }


    });

}



/* =====================================================
   TRANSFER STEPS
===================================================== */


const nextBtn = document.querySelector(".next");

const steps = document.querySelectorAll(".step");



if(nextBtn){


let currentStep = 0;



nextBtn.addEventListener("click",function(){



const inputs = document.querySelectorAll(
".field input,.field select"
);



let empty=false;



inputs.forEach(function(input){


if(input.value.trim()=="" ||
input.value=="اختر الحساب" ||
input.value=="اختر البنك"){

    empty=true;

}


});



if(empty){

alert(
"يرجى تعبئة جميع البيانات المطلوبة"
);

return;

}



if(currentStep < steps.length-1){


steps[currentStep]
.classList.remove("active");


currentStep++;


steps[currentStep]
.classList.add("active");



if(currentStep === 1){

nextBtn.innerHTML="تأكيد التحويل";

alert(
"يرجى مراجعة بيانات العملية"
);

}



if(currentStep === 2){

nextBtn.innerHTML="تنفيذ العملية";

}



if(currentStep === 3){

nextBtn.innerHTML="تمت العملية";

nextBtn.disabled=true;


alert(
"تم تنفيذ التحويل بنجاح"
);

}



}


});


}



/* =====================================================
   MENU ACTIVE
===================================================== */


const menuItems =
document.querySelectorAll(".menu-item");



menuItems.forEach(function(item){


item.addEventListener("click",function(){


menuItems.forEach(function(i){

i.classList.remove("active");

});


item.classList.add("active");


});


});



/* =====================================================
   SIDEBAR ACTIVE
===================================================== */


const sideItems =
document.querySelectorAll(".box li");



sideItems.forEach(function(item){


item.addEventListener("click",function(){


sideItems.forEach(function(i){

i.classList.remove("active");

});


item.classList.add("active");


});


});



});