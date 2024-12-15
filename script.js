function showCode(codeNumber) {
    // Hide all code boxes first
    for (let i = 1; i <= 5; i++) {
        const codeBox = document.getElementById(`code${i}`);
        if (codeBox) {
            codeBox.style.display = 'none';
        }
    }
    
    // Show the selected code box
    const selectedCodeBox = document.getElementById(`code${codeNumber}`);
    if (selectedCodeBox) {
        selectedCodeBox.style.display = 'block';
    }
}
