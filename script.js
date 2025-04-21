document.getElementById('user-type').addEventListener('change', function() {
    const userType = this.value;
    if (userType === 'user') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('emergency-services').style.display = 'block';
    } else if (userType === 'driver') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('driver-dashboard').style.display = 'block';
    }
});

document.getElementById('request-ambulance').addEventListener('click', function() {
    document.getElementById('emergency-services').style.display = 'none';
    document.getElementById('ambulance-tracking').style.display = 'block';
});

document.getElementById('go-online').addEventListener('click', function() {
    alert('You are now online.');
});
