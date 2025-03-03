function completeTask(button, taskName) {
    button.disabled = true;
    button.classList.remove("bg-[#3752FD]");
    button.classList.add("bg-[#85868b5c]");
    
    setTimeout(() => {
        alert("Board updated successfully");
        
        let totalTasksElem = document.getElementById("totalTasks");
        let completedTasksElem = document.getElementById("completedTasks");
        let logContainer = document.getElementById("history");
        
        let totalTasks = parseInt(totalTasksElem.innerText);
        let completedTasks = parseInt(completedTasksElem.innerText);
        
        totalTasksElem.innerText = totalTasks - 1;
        completedTasksElem.innerText = completedTasks + 1;
        
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

     
        let ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        let logEntry = document.createElement("p");
        logEntry.className = "text-base bg-[#F4F7FF] p-4 rounded-xl mb-4";
        logEntry.innerText = `You have completed ${taskName} at ${formattedTime}`;
        
        logContainer.appendChild(logEntry);
        
        if (totalTasks - 1 === 0) {
            setTimeout(() => {
                alert("Congrats. you have done all the current tasks.");
            }, 100);
        }
    }, 100);
}