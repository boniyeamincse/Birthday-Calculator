function calculateAge() {
    const birthdayInput = document.getElementById('birthday').value;
    if (!birthdayInput) {
        document.getElementById('result').textContent = "Please enter your birthday.";
        return;
    }
    
    const birthday = new Date(birthdayInput);
    const today = new Date();
    
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}
