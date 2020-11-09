$(document).ready(function() {

    $('.devour-burger').on('click', (event) => {
        let id = event.target.dataset.id;

        let toggleDevoured = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: toggleDevoured
        }).then( function() {
            console.log('changed devoured to ' + toggleDevoured);
            location.reload();
        })
    })

    $('.add-burger').on('submit', function(event) {
        event.preventDefault();
        
        let newBurger = {
            burger_name: $('#burger-name').val().trim()
        }
        if ($('#burger-name').val().trim()) {
            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function() {
                console.log('created new burger: ' + newBurger);
                location.reload();
            })
        }
    })
    
    new CircleType(document.getElementById('heading-arc')).radius(470);
    
})
