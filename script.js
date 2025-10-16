document.addEventListener('DOMContentLoaded', () => {

    const copyButton = document.getElementById('copy-button');
    const codeToCopy = document.getElementById('code-to-copy').innerText;

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeToCopy).then(() => {
            copyButton.innerText = 'コピー完了！';
            setTimeout(() => {
                copyButton.innerText = 'コピー';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            copyButton.innerText = '失敗';
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const instructions = document.querySelectorAll('.instructions');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            instructions.forEach(inst => inst.classList.remove('active'));

            const platform = button.dataset.platform;
            const instructionToShow = document.getElementById(platform);

            button.classList.add('active');
            instructionToShow.classList.add('active');
        });
    });
});