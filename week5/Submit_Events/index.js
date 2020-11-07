function contact_form_submit(event) {
    let form = document.forms.contact_form
    let fname = form.elements['f-name'].value
    let lname = form.elements['l-name'].value
    let country = form.elements['country'].value
    alert(`First Name: ${fname}\nLast Name: ${lname}\nCountry: ${country}`)
}