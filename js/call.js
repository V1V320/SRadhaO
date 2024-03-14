document.getElementById('callButton').addEventListener('click', function() {
    var phoneNumber = '+916396712788'; // Replace with your actual phone number

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Redirect to phone dialer
        window.location.href = 'tel:' + phoneNumber;
    } else {
        // Show message for desktop users
        alert('Please call OR whatsapp us 8937964789, 8865828789, +916396712788 to check availability.');
    }
});
document.getElementById('call').addEventListener('click', function() {
    var phoneNumber = '+916396712788'; // Replace with your actual phone number

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Redirect to phone dialer
        window.location.href = 'tel:' + phoneNumber;
    } else {
        // Show message for desktop users
        alert('Please call OR whatsapp us  8937964789, 8865828789, +916396712788 to check availability.');
    }
});

document.getElementById('callUs').addEventListener('click', function() {
    var phoneNumber = '+916396712788'; // Replace with your actual phone number

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Redirect to phone dialer
        window.location.href = 'tel:' + phoneNumber;
    } else {
        // Show message for desktop users
        alert('Please call OR whatsapp us at ' + phoneNumber + ' to check availability.');
    }
});