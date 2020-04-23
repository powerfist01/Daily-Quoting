$(document).ready(function(){
    const database = firebase.database();
        $('#upload').click(function(){
        var text = $('#quote').val();
        var number = Math.round(Math.random()*100);
        database.ref().child(number).set({
            'quote' : text
        })
    })
})