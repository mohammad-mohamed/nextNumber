calculate_button = document.getElementById('calculate_button');
difference = 0
previous_difference = 0
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    number_string = document.getElementById('number_list').value;
    number_string.replace(' ','');
    number_list = number_string.split(",");
    next_sequence(number_list);
    console.log('difference'+ difference);
    console.log('previous_difference'+ previous_difference);
 
    if (difference == previous_difference){
        console.log(Number(number_list[number_list.length-1]) + difference);
        document.getElementById('next_number').value = Number(number_list[number_list.length-1]) + difference;
    }
    else 
    {
        console.log(Number(number_list[number_list.length-1]) + difference + (difference - previous_difference));
        document.getElementById('next_number').value = Number(number_list[number_list.length-1]) + difference + (difference - previous_difference);
    }

})

function next_sequence(number_list){

    if (number_list.length > 1) { 
        previous_difference = difference
        difference = number_list[1] - number_list[0];
        number_list.shift()
        next_sequence(number_list)
    }
}
