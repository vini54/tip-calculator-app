$(document).ready(function(){
    let tip
    $('#tip5').click(function(){
        tip = 0.05
        calcular()
    })
    $('#tip10').click(function(){
        tip = 0.10
        calcular()
    })
    $('#tip15').click(function(){
        tip = 0.15
        calcular()
    })
    $('#tip25').click(function(){
        tip = 0.25
        calcular()
    })
    $('#tip50').click(function(){
        tip = 0.5
        calcular()
    })
    $('#reset').click(function(){
        reset()
    })
    function calcular(){
        if($('#people').val() == 0){
            $('span.zero').css("display", "block")
            $('#people').css("border", "2px solid red")
        } else {
            let price = Number($('#price').val())
            let people = Number($('#people').val())
            let tipAmount = ( (price*tip) / people )
            let total = (price + price*tip) / people

            $('#tipAmount').text('$'+tipAmount.toFixed(2))
            $('#total').text('$'+total.toFixed(2))

            $('#reset').css({"color": "var(--color2)", "opacity": "100%"})
        }   
    }
    function reset() {
        $('#price').val(0)
        $('#people').val(0)
        $('#tipAmount').text('$0.00')
        $('#total').text('$0.00')
        $('#reset').css({"color": "var(--color2)", "opacity": "20%"})
        $('span.zero').css("display", "none")
        $('#people').css("border", "none")
    }
})