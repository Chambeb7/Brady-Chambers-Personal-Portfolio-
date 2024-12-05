function followLinkResume(){
    window.location.href = "http://127.0.0.1:5500/pages/resume.html"
}
function followLinkProjects(){
    window.location.href = "http://127.0.0.1:5500/pages/projects.html"

}
function followLinkContact(){
    window.location.href = "http://127.0.0.1:5500/pages/contact.html"

}
function followLinkHome(){
    window.location.href = "http://127.0.0.1:5500/Index.html"

}

function contactMe() {
    const firstName = document.getElementById('validationCustom01').value;
    const lastName = document.getElementById('validationCustom02').value;
    const email = document.getElementById('validationCustomUsername').value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
}
