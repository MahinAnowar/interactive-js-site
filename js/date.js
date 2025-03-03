        const date = new Date();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const today = days[new Date().getDay()] + " ,";

        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        const CurrentDate = `${month} ${day} ${year}`;

        document.getElementById("date").textContent = CurrentDate;
        document.getElementById("today").textContent = today;