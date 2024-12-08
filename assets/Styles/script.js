function followLinkResume() {
    window.location.href = "./pages/resume.html";
}
function followLinkProjects() {
    window.location.href = "./pages/projects.html";

}
function followLinkContact() {
    window.location.href = "./pages/contact.html";

}
function followLinkHome() {
    window.location.href = "../index.html"

}







function contactMe() {
    const firstName = document.getElementById('validationCustom01').value;
    const lastName = document.getElementById('validationCustom02').value;
    const email = document.getElementById('validationCustomUsername').value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
}

