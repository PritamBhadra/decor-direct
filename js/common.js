/* Scroll to fixed header */

window.onscroll = function() {fixHeader()};
function fixHeader() {
if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  var element = document.getElementById("main-header");
  element.classList.add("fixHeader");
} else {
  var element = document.getElementById("main-header");
  element.classList.remove("fixHeader");
}
}

/* Scroll to fixed header */

function team_list_open(me) {
  //document.getElementById("abt-info-1").classList.toggle("addCSS");
  me.parentElement.parentElement.parentElement.nextSibling.nextSibling.classList.add("addCSS");
} 
function team_close(me) {
  //document.getElementById("abt-info-1").classList.toggle("addCSS");
  me.parentElement.parentElement.classList.remove("addCSS");
} 
  
  // function team_close_1() {
  //    var element = document.getElementById("abt-info-1");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_1 () {
  //     document.getElementById("abt-info-1").classList.toggle("addCSS");
  //   }   
    


  
  // function team_close_1() {
  //    var element = document.getElementById("abt-info-1");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_1 () {
  //     document.getElementById("abt-info-1").classList.toggle("addCSS");
  //   }   


  
  // function team_close_2() {
  //    var element = document.getElementById("abt-info-2");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_2 () {
  //     document.getElementById("abt-info-2").classList.toggle("addCSS");
  //   }   

  
  // function team_close_3() {
  //    var element = document.getElementById("abt-info-3");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_3 () {
  //     document.getElementById("abt-info-3").classList.toggle("addCSS");
  //   }   

  
  // function team_close_4() {
  //    var element = document.getElementById("abt-info-4");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_4 () {
  //     document.getElementById("abt-info-4").classList.toggle("addCSS");
  //   }   

  
  // function team_close_5() {
  //    var element = document.getElementById("abt-info-5");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_5 () {
  //     document.getElementById("abt-info-5").classList.toggle("addCSS");
  //   }   

  
  // function team_close_6() {
  //    var element = document.getElementById("abt-info-6");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_6 () {
  //     document.getElementById("abt-info-6").classList.toggle("addCSS");
  //   }   

  
  // function team_close_7() {
  //    var element = document.getElementById("abt-info-7");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_7 () {
  //     document.getElementById("abt-info-7").classList.toggle("addCSS");
  //   }   

  
  // function team_close_8() {
  //    var element = document.getElementById("abt-info-8");
  //     element.classList.remove("addCSS");
  //   }

  // function team_list_open_8 () {
  //     document.getElementById("abt-info-8").classList.toggle("addCSS");
  //   }   

/**********/
function SwitchTab(tab_id, tab_content) {
  // first of all we get all tab content blocks (I think the best way to get them by class names)
  var x = document.getElementsByClassName("tabcontent");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'; // hide all tab content
  }
  document.getElementById(tab_content).style.display = 'block'; // display the content of the tab we need

  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  var x = document.getElementsByClassName("tabmenu");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].className = 'tabmenu';
  }
  document.getElementById(tab_id).className = 'tabmenu active';
}

/*************/

    {/* fsLightboxInstances['first-lightbox'].open(0);
    fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!'); */}
    
    


/***********/


