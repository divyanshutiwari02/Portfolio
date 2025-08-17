const resumeBtn = document.getElementById('resumeBtn');
const githubBtn = document.getElementById('githubBtn');
const projectLink = document.getElementById('Project-link');

resumeBtn.addEventListener('click', function(){
    window.location.href = 'MyResume.pdf';
})

githubBtn.addEventListener('click', function(){
    window.location.href = 'https://github.com/divyanshutiwari02';
})

