var content=document.querySelectorAll('#content');
var menu_topic=document.querySelectorAll('#menu_topic');
function menu(n){
    for(let i=0; i<content.length;i++){
        if(n==i){
            content[i].style.display='block';
            //menu_topic[i].style.borderRadius = '0px';
            menu_topic[i].style.backgroundColor='rgb(77, 77, 87)'; 
            menu_topic[i].style.color='white';
        }
        else{
            content[i].style.display='none';
            //menu_topic[i].style.borderRadius = '0px';
            menu_topic[i].style.backgroundColor='rgb(212, 219, 218)'; 
            menu_topic[i].style.color='black';
        }
    }
}
content[0].style.display='block';
//menu_topic[0].style.borderRadius = '0px';
menu_topic[0].style.backgroundColor='rgb(77, 77, 87)'; 
menu_topic[0].style.color='white';