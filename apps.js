function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'},
    'google_translate_element')
}
document.querySelector(".btn").addEventListener("click", googleTranslateElementInit())