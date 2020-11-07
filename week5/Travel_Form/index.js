function contact_form_submit(event) {
  let form = document.forms.contact_form
  let fname = form.elements['f-name'].value
  let lname = form.elements['l-name'].value
  let age = form.elements['age'].value
  let gender = form.elements['gender'].value
  let location = form.elements['location'].value
  let dietary = []
  for (let i = 0;i < form.elements['dietary'].length; i++){
      e = form.elements['dietary'][i]
      if(e.checked) {
          dietary.push(e.value);
      }
  }
  alert(`First Name: ${fname}\nLast Name: ${lname}\nage: ${age}\nGender: ${age}\nLocation: ${location}\nDietary Restrictions: ${dietary}`)
}