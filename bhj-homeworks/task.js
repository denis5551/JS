
const tabs = document.getElementsByClassName('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tabs1 = document.getElementById('tabs1');

tabs1.onclick = function (e) {
  console.log(tabs1.indexOf(e.target));
  //e.target.classList.add('tab_active');
}


/*
for (let i = 0; i < tabs.length; i++) {
  
  tabs[i].onclick = function () {

    if(tabs[i].className.includes('tab_active') === false) {
      tabs[i].classList.add('tab_active');
    }
    
    if(tabContent[i].className.includes('tab__content_active') === false) {
      tabContent[i].classList.add('tab__content_active');
    }
    
    if(tabs[i-1].className.includes('tab_active')) {
      tabs[i-1].classList.remove('tab_active');
    }
    
    if(tabContent[i-1].className.includes('tab__content_active')) {
      tabContent[i-1].classList.remove('tab__content_active');
    }
    
    if(tabs[i+1].className.includes('tab_active')) {
      tabs[i+1].classList.remove('tab_active');
    }
    
    if(tabContent[i+1].className.includes('tab__content_active')) {
      tabContent[i+1].classList.remove('tab__content_active');
    }
	
	if(tabs[i-2].className.includes('tab_active')) {
      tabs[i-2].classList.remove('tab_active');
    }
    
    if(tabContent[i-2].className.includes('tab__content_active')) {
      tabContent[i-2].classList.remove('tab__content_active');
    }
    
    if(tabs[i+2].className.includes('tab_active')) {
      tabs[i+2].classList.remove('tab_active');
    }
    
    if(tabContent[i+2].className.includes('tab__content_active')) {
      tabContent[i+2].classList.remove('tab__content_active');
    }
  };
  
};
*/
