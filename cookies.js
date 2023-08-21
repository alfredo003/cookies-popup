function cookies(functions){
const container = document.querySelector('.cookies-container')
const save = document.querySelector('.cookies-save')
if(!container || !save) return null;

const localPref =JSON.parse(window.localStorage.getItem('cookies-pref'));
console.log(localPref);
if(localPref) activeFunctions(localPref)

function getFromPref(){
  const inputs = Array.from(document.querySelectorAll('[data-function'))
  return inputs.filter((el)=>el.checked).map((el)=>el.getAttribute('data-function'))
}

function activeFunctions(pref){
  pref.forEach((f)=>functions[f]());
  container.style.display = 'none';
  window.localStorage.setItem('cookies-pref',JSON.stringify(pref))
  
}
function handleSave(){
 const pref = getFromPref();
 activeFunctions(pref);

}


save.addEventListener('click',handleSave)

}
function marketing(){
  console.log('marketing')
}
function analytics(){
  console.log('analytics')
}

cookies({
  marketing,
  analytics
});