    function calculateWindChill(temperature, windSpeed) {
        if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
        }   
            else {
            return "N/A";
        }
    }

    const temperature = 5;
    const windSpeed = 10;
    
    window.onload = function() {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windChillDisplay").innerText = windChill;
        
        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;
        document.getElementById("Year").innerText = `© ${currentYear} 📍 Samuel Peter 📍 Nigeria`;
        document.getElementById("Modified").innerText = `Last Modified ${lastModified}`;
    };