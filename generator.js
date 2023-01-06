function generatePassword() {
    const length = document.getElementById("length").value;
    const password = generateRandomPassword(length);
    document.getElementById("password").textContent = password;
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function copyPassword() {
    const copyText = document.getElementById("password");
    navigator.clipboard.writeText(copyText.textContent);
    document.getElementById('showCopied').textContent = "Copied password!";
    setTimeout(function() { 
        document.getElementById('showCopied').textContent = ""
    }, 3000);
}
