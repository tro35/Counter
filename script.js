let count = $('#zvetsi').text();

$('button').click(e =>{
    count++;
    $('#zvetsi').text(count);
    console.log(e);
})