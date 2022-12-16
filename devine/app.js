$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)



    $("#formUser").on("submit", function (e) {
        e.preventDefault()
        let input = $("input[type=text]")
        

        let userValue = parseInt(input.val())
        if (randomNumber !== userValue) {
            input.val("")
            input.addClass("error animated bounce")

            setTimeout(function () {
                input.removeClass("error animated bounce")
            }, 300)
        }
        if (randomNumber === userValue) {
            console.log("gagné")
            input.remove()
            $(".fa-check-circle").show()
            $(".fa-check-circle").addClass("animated jackInTheBox")
        }
    })
})