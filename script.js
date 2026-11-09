(function(){
  var th=[].slice.call(document.querySelectorAll(".bbt")),lb=document.getElementById("lb"),im=document.getElementById("lbimg"),cnt=document.getElementById("lbcnt"),cur=0,last=null;
  function show(i){cur=(i+th.length)%th.length;im.src=th[cur].querySelector("img").src;im.alt="Brand book page "+(cur+1);cnt.textContent=(cur+1)+" / "+th.length}
  function open(i){last=document.activeElement;show(i);lb.classList.add("open");document.getElementById("lbclose").focus()}
  function close(){lb.classList.remove("open");if(last)last.focus()}
  th.forEach(function(b,i){b.addEventListener("click",function(){open(i)})});
  document.getElementById("lbprev").onclick=function(){show(cur-1)};
  document.getElementById("lbnext").onclick=function(){show(cur+1)};
  document.getElementById("lbclose").onclick=close;
  lb.addEventListener("click",function(e){if(e.target===lb)close()});
  document.addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1)});
  window.addEventListener("hashchange",function(){lb.classList.remove("open")});
})();
(function(){
  var titles={home:"Sam Aminjavaheri | Digital Designer","music-masters":"Music Masters | Sam Aminjavaheri",acuva:"Acuva Brand Book | Sam Aminjavaheri",resume:"Resume | Sam Aminjavaheri",yres:"YRES Web Design | Sam Aminjavaheri"};
  var btn=document.getElementById("ddbtn"),menu=document.getElementById("ddmenu");
  function closeMenu(){menu.classList.remove("open");btn.setAttribute("aria-expanded","false")}
  btn.addEventListener("click",function(e){e.stopPropagation();var o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o)});
  document.addEventListener("click",function(e){if(!menu.contains(e.target))closeMenu()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();btn.focus()}});
  function route(){
    var h=(location.hash||"#home").slice(1),scroll=null,v=h;
    if(h==="about"){v="home";scroll="sec-about"}
    else if(h==="projects"){v="home";scroll="sec-projects"}
    else if(!titles[h]){v="home"}
    document.querySelectorAll(".view").forEach(function(el){el.classList.toggle("on",el.id==="view-"+v)});
    document.querySelectorAll("nav [data-r]").forEach(function(a){a.removeAttribute("aria-current");if(a.dataset.r===v&&h!=="about"&&h!=="projects")a.setAttribute("aria-current","page")});
    document.title=titles[v];closeMenu();
    if(scroll){requestAnimationFrame(function(){document.getElementById(scroll).scrollIntoView()})}else{window.scrollTo(0,0)}
  }
  window.addEventListener("hashchange",route);route();
})();
