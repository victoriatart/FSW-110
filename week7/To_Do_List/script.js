
let allFormsData = []
$(function () {

    $("#formid").submit((e) => {
        e.preventDefault();
        // let form = $("#formid").serializeArray()
        let data = _.object($("#formid").serializeArray().map(function (v) { return [v.name, v.value]; }))
        if (data.title.length > 0 && data.description.length > 0) {
            var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            var uniqid = randLetter + Date.now();
            data.id = uniqid
            allFormsData.push(data)
        } else {
            alert("title and description are compulsory to fill")
        }

        $(".alerts_gen").remove()
        displayList()
    })

});
function displayList() {
    console.log(allFormsData)
    allFormsData.map((item) => {
        $("#documents").append(
            `
            <div class="alert alerts_gen alert-warning alert-dismissible fade show" role="alert">
                <strong>${item.title}:</strong>&nbsp;${item.description}
                <button type="button" class="close"  onclick="myFunction(event)" id=${item.id}>
                    <span aria-hidden="true" id=${item.id}>&times;</span>
                </button>
            </div>
            `
        )
    })
}
function myFunction(e) {
    allFormsData.map((item) => {
        if (item.id === e.target.id) {
            allFormsData.splice(allFormsData.indexOf(item), 1)
        }
    })
    $(".alerts_gen").remove()
    displayList()
}
