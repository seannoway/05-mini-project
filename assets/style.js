setInterval(
    function(){
        var today = dayjs().format('MMM DD, YYYY hh:mm:ss A')
$('.hero').text(today);

    },1000
)
// var today = dayjs().format('MMM DD, YYYY hh:mm:ss A')
// $('.hero').text(today);
