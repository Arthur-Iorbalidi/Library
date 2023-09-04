console.log("Самооцека: 200")

const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('main')
const iconBtn = document.querySelector('.icon_profile')
const profile  = document.querySelector('.profile')

iconBtn.addEventListener('click', () => {
    profile.classList.toggle('profile_opened')
})

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu_opened')
    burgerBtn.classList.toggle('burgeroff')
})

let CardHave = false
function IsCardHave() {
    if(localStorage.getItem("CardHave") === undefined || iconBtn.innerHTML === "")
    {
        CardHave = false
    }
    else 
    {
        CardHave = localStorage.getItem("CardHave") 
    }
}

document.body.addEventListener('click', (event) => {
    if ((!event.target.closest('.menu')) & (event.target != burgerBtn))
    {
        menu.classList.remove('menu_opened')
        burgerBtn.classList.remove('burgeroff')
    }
    if ((event.target != iconBtn) & (!event.target.closest('.profile')))
    {
        profile.classList.remove('profile_opened')
    }
    if ((!event.target.closest('.modal_register')) & (event.target != BtnRegister) & (event.target != BtnSignUp))
    {
        ModalRegister.classList.remove('background_modal_opened')
    }
    if ((!event.target.closest('.modal_register')) & (event.target != LogInLibraryCards) & (event.target != BtnLogIn) & (!event.target.classList.contains('Favorites_books_row_book_btn')))
    {
        ModalLogIn.classList.remove('background_modal_opened')
    }
    if ((!event.target.closest('.modal_register')) & (event.target != BtnMyProfile) & (event.target != BtnMyProfileLibraryCards))
    {
        ModalMyProfile.classList.remove('background_modal_opened')
    }
    if ((!event.target.closest('.modal_register')) & (!event.target.classList.contains('Favorites_books_row_book_btn')))
    {
        ModalBuy.classList.remove('background_modal_opened')
    }
})

function paginationColor(x, active, p1p, p2p, p3p, p4p, p5p) {
    active.classList.toggle('pagination_item_active_phones')
    if (x === "0px")
    {
        p1p.classList.add('pagination_item_active_phones')
    }
    else if (x === "450px")
    {
        p2p.classList.add('pagination_item_active_phones')
    }
    else if (x === "900px")
    {
        p3p.classList.add('pagination_item_active_phones')
    }
    else if (x === "1350px")
    {
        p4p.classList.add('pagination_item_active_phones')
    }
    else if (x === "1800px")
    {
        p5p.classList.add('pagination_item_active_phones');
    }   
}

const pagination = document.querySelector(".pagination")
pagination.onclick = function(event) {
    const AboutImages = About.querySelector('.About_images')
    const active = About.querySelector('.pagination_item_active')
    if (event.target.classList.contains("p1"))
    {
        AboutImages.style.right = "0px"
        event.target.classList.toggle('pagination_item_active')
        active.classList.toggle('pagination_item_active')
    }
    if (event.target.classList.contains("p2"))
    {
        AboutImages.style.right = "475px"
        event.target.classList.toggle('pagination_item_active')
        active.classList.toggle('pagination_item_active')
    }
    if (event.target.classList.contains("p3"))
    {
        AboutImages.style.right = "950px"
        event.target.classList.toggle('pagination_item_active')
        active.classList.toggle('pagination_item_active')
    }
}

function ArrowsActive(AboutImagesForPhones) {
    if (AboutImagesForPhones.style.right === '0px')
    {
        document.querySelector('.arrow_left').classList.add('IsNotActive')
        document.querySelector('.arrow_right').classList.remove('IsNotActive')
    }
    else if (AboutImagesForPhones.style.right === '1800px')
    {
        
        document.querySelector('.arrow_right').classList.add('IsNotActive')
        document.querySelector('.arrow_left').classList.remove('IsNotActive')
    }
    else
    {
        document.querySelector('.arrow_left').classList.remove('IsNotActive')
        document.querySelector('.arrow_right').classList.remove('IsNotActive')
    }
}

const paginationForPhonesArrows = document.querySelector(".About_images_forphones")
paginationForPhonesArrows.onclick = function(event) {
    const AboutImagesForPhones = About.querySelector('.About_images_forphones_div_container')
    const active = About.querySelector('.pagination_item_active_phones')
    const p1p = About.querySelector('.p1p')
    const p2p = About.querySelector('.p2p')
    const p3p = About.querySelector('.p3p')
    const p4p = About.querySelector('.p4p')
    const p5p = About.querySelector('.p5p')
    if (event.target.classList.contains("arrow_left"))
    {
        if (AboutImagesForPhones.style.right === '')
        {
            AboutImagesForPhones.style.right = '0px'
        }
        let x = AboutImagesForPhones.style.right
        x = parseInt(x.substring(0, x.length - 2)) - 450
        if (x < 0)
        {
            x = 0
        }
        AboutImagesForPhones.style.right = x + 'px'
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
    if (event.target.classList.contains("arrow_right"))
    {
        if (AboutImagesForPhones.style.right === '')
        {
            AboutImagesForPhones.style.right = '0px'
        }
        let x = AboutImagesForPhones.style.right
        x = parseInt(x.substring(0, x.length - 2)) + 450
        if (x > 1800)
        {
            x = 1800
        }
        AboutImagesForPhones.style.right = x + 'px'
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
}

const paginationForPhones = document.querySelector(".pagination_forphones")
paginationForPhones.onclick = function(event) {
    const AboutImagesForPhones = About.querySelector('.About_images_forphones_div_container')
    const p1p = About.querySelector('.p1p')
    const p2p = About.querySelector('.p2p')
    const p3p = About.querySelector('.p3p')
    const p4p = About.querySelector('.p4p')
    const p5p = About.querySelector('.p5p')
    const active = About.querySelector('.pagination_item_active_phones')
    if (event.target.classList.contains("p1p"))
    {
        AboutImagesForPhones.style.right = "0px"
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
    else if (event.target.classList.contains("p2p"))
    {
        AboutImagesForPhones.style.right = "450px"
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
    else if (event.target.classList.contains("p3p"))
    {
        AboutImagesForPhones.style.right = "900px"
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
    else if (event.target.classList.contains("p4p"))
    {
        AboutImagesForPhones.style.right = "1350px"
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
    else if (event.target.classList.contains("p5p"))
    {
        AboutImagesForPhones.style.right = "1800px"
        paginationColor(AboutImagesForPhones.style.right, active, p1p, p2p, p3p, p4p, p5p)
        ArrowsActive(AboutImagesForPhones)
    }
}

const FavoritesBtns = document.querySelector(".Favorites_btns")
FavoritesBtns.onclick = function(event) {
    const btns = document.querySelectorAll('.Favorites_btns_item > input')
    const Books = document.querySelectorAll('.Season')
    const active = document.querySelector('.Season_active')
    const checked = document.querySelector(".checked")
    const checkedLabel = document.querySelector(".checked_label")
    const labels = document.querySelectorAll('.Favorites_btns_item > label')
    if (event.target === checked)
    {
        return false
    }
    if (event.target === btns[0])
    {
        checked.classList.toggle('checked')
        checkedLabel.classList.toggle('checked_label')
        btns[0].classList.add('checked')
        labels[0].classList.add('checked_label')
        active.classList.toggle("visible")
        setTimeout(function() {
            active.classList.toggle("Season_active")
        },300)
        setTimeout(function() {
            Books[0].classList.add("Season_active")
        },300)
        setTimeout(function() {
            Books[0].classList.toggle("visible")
        },350)
    }
    else if (event.target === btns[1])
    {
        checked.classList.toggle('checked')
        checkedLabel.classList.toggle('checked_label')
        btns[1].classList.add('checked')
        labels[1].classList.add('checked_label')
        active.classList.toggle("visible")
        setTimeout(function() {
            active.classList.toggle("Season_active")
        },300)
        setTimeout(function() {
            Books[1].classList.add("Season_active")
        },300)
        setTimeout(function() {
            Books[1].classList.toggle("visible")
        },350)
    }
    else if (event.target === btns[2])
    {
        checked.classList.toggle('checked')
        checkedLabel.classList.toggle('checked_label')
        btns[2].classList.add('checked')
        labels[2].classList.add('checked_label')
        active.classList.toggle("visible")
        setTimeout(function() {
            active.classList.toggle("Season_active")
        },300)
        setTimeout(function() {
            Books[2].classList.add("Season_active")
        },300)
        setTimeout(function() {
            Books[2].classList.toggle("visible")
        },350)
    }
    else if (event.target === btns[3])
    {
        checked.classList.toggle('checked')
        checkedLabel.classList.toggle('checked_label')
        btns[3].classList.add('checked')
        labels[3].classList.add('checked_label')
        active.classList.toggle("visible")
        setTimeout(function() {
            active.classList.toggle("Season_active")
        },300)
        setTimeout(function() {
            Books[3].classList.add("Season_active")
        },300)
        setTimeout(function() {
            Books[3].classList.toggle("visible")
        },350)
    }
}

const BtnRegister = document.querySelector('.Register')
const ModalRegister = document.querySelector('.background_modal_Register')
const BtnModalClose = document.querySelectorAll('.modal_register_btn_close')
const BtnSignUp = document.querySelector('.Register_btns_SignUp')
BtnRegister.onclick = function(event) {
    ModalRegister.classList.add('background_modal_opened')
    profile.classList.remove('profile_opened')
}
BtnSignUp.onclick = function(event) {
    ModalRegister.classList.add('background_modal_opened')
}
BtnModalClose[0].onclick = function(event) {
    ModalRegister.classList.remove('background_modal_opened')
}

function CounterVisits() {
    let countOfVisits = parseInt(localStorage.getItem("Visits")) + 1;
    localStorage.setItem("Visits", countOfVisits);

    document.querySelectorAll('.visits_count')[0].innerHTML = localStorage.getItem("Visits")
    document.querySelectorAll('.visits_count')[1].innerHTML = localStorage.getItem("Visits")
}
function CounterBooks() {
    const v = JSON.parse(localStorage.getItem("Books"))
    document.querySelectorAll('.books_count')[0].innerHTML = v.length
    document.querySelectorAll('.books_count')[1].innerHTML = v.length
}

const profileH5 = document.querySelector('.profile_h5')
const BtnMyProfile = document.querySelector('.my_profile')
const BtnLogOut = document.querySelector('.LogOut')
const CardNumberSpan = document.querySelector('.card_number')
const MyProfileInitials = document.querySelector('.initials')
const MyProfileFullName = document.querySelector('.full_name')
function Registered() {    
    iconBtn.classList.toggle('icon_profile_registered')
    const iconText = localStorage.getItem('name').substring(0, 1) + localStorage.getItem('surname').substring(0, 1)
    iconBtn.innerHTML = iconText.toUpperCase()
    iconBtn.title = localStorage.getItem('name') + ' ' + localStorage.getItem('surname')

    profileH5.innerHTML = localStorage.getItem('CardNumber')
    profileH5.classList.toggle('profile_h5_registered')
    BtnLogIn.classList.toggle('IsHidden')
    BtnRegister.classList.toggle('IsHidden')
    BtnMyProfile.classList.toggle('IsHidden')
    BtnLogOut.classList.toggle('IsHidden')

    CardNumberSpan.innerHTML = localStorage.getItem("CardNumber")
    MyProfileInitials.innerHTML = localStorage.getItem('name').substring(0, 1) + localStorage.getItem('surname').substring(0, 1)
    MyProfileFullName.innerHTML = localStorage.getItem('name') + ' ' + localStorage.getItem('surname')

    document.querySelector('.LibraryCard_div_item2_notregistrated').classList.add('IsHidden')
    document.querySelector('.LibraryCard_div_item2_registrated').classList.remove('IsHidden')

    CounterVisits()
    CounterBooks()

    const y = JSON.parse(localStorage.getItem("Books"))
    for (let i = 0; i < y.length; i++)
    {
        BtnsBuy[y[i]].classList.add('activebtn')
        BtnsBuy[y[i]].innerHTML = "Own"
        const current = BtnsBuy[y[i]].closest('.Favorites_books_row_book')
        const NewListItem = document.createElement('li')
        NewListItem.innerHTML = current.querySelector('h4').innerHTML + ', ' + current.querySelector('h5').innerHTML
        document.querySelector('.my_profile_right_ul').append(NewListItem)
    }

    BtnCheckTheCard.classList.add('IsHidden')
    CheckInformation.classList.remove('IsHidden')

    document.querySelector('.LibraryCard').classList.add('LibraryCard_registered')

    IsCardHave()

}

function NotRegistered() {
    iconBtn.classList.toggle('icon_profile_registered')
    iconBtn.innerHTML = null
    profileH5.innerHTML = "Profile"
    profileH5.classList.toggle('profile_h5_registered')
    BtnLogIn.classList.toggle('IsHidden')
    BtnRegister.classList.toggle('IsHidden')
    BtnMyProfile.classList.toggle('IsHidden')
    BtnLogOut.classList.toggle('IsHidden')

    document.querySelector('.name').value = ""
    document.querySelector('.surname').value = ""
    document.querySelector('.email').value = ""
    document.querySelector('.password').value = ""
    document.querySelector('.emailOrCard').value = ""
    document.querySelector('.passwordLogIn').value = ""
    
    document.querySelector('.bank_card_number').value = ""
    document.querySelector('.expiration_code_1').value = ""
    document.querySelector('.expiration_code_2').value = ""
    document.querySelector('.cvc').value = ""
    document.querySelector('.cardholder_name').value = ""
    document.querySelector('.postal_code').value = ""
    document.querySelector('.city_town').value = ""

    document.querySelector('.LibraryCard_div_item2_notregistrated').classList.remove('IsHidden')
    document.querySelector('.LibraryCard_div_item2_registrated').classList.add('IsHidden')

    for(let i = 0; i < BtnsBuy.length; i++)
    {
        BtnsBuy[i].classList.remove('activebtn')
        BtnsBuy[i].innerHTML = "Buy"
    }

    while(document.querySelector('.my_profile_right_ul').firstChild)
    {
        document.querySelector('.my_profile_right_ul').removeChild(document.querySelector('.my_profile_right_ul').firstChild)
    }

    BtnCheckTheCard.classList.remove('IsHidden')
    CheckInformation.classList.add('IsHidden')

    document.querySelector('.LibraryCard').classList.remove('LibraryCard_registered')

    IsCardHave()
}

const ModalBtnSignUp = document.querySelector('.modal_register_btn_SignUp')
ModalBtnSignUp.onclick = function(event) {
    const name = document.querySelector('.name').value
    const surname = document.querySelector('.surname').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    if (name === "" || surname === "" || email === "" || password === "" || password.length < 8)
    {
        return false
    }
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (!emailRegex.test(email)) {
        alert("Введите корректный email");
        return false;
    }
    let randomNumber = Math.floor(Math.random() * (parseInt('0xFFFFFFFFF', 16) + 1));
    let CardNumber = randomNumber.toString(16).toUpperCase();
    while (CardNumber.length < 9) {
        CardNumber = '0' + CardNumber;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("CardNumber", CardNumber);
    localStorage.setItem("CardHave", "false")
    localStorage.setItem("Visits", 0);
    localStorage.setItem("Books", JSON.stringify([]));
    ModalRegister.classList.remove('background_modal_opened')

    Registered()
}

const BtnLogInLittle = document.querySelector('.modal_register_lower_btn_LogIn')
const BtnRegisterLittle = document.querySelector('.modal_register_lower_btn_Register')
BtnLogInLittle.onclick = function(event) {
    ModalLogIn.classList.add('background_modal_opened')
    ModalRegister.classList.remove('background_modal_opened')
}
BtnRegisterLittle.onclick = function(event) {
    ModalRegister.classList.add('background_modal_opened')
    ModalLogIn.classList.remove('background_modal_opened')
}

const BtnLogIn = document.querySelector('.LogIn')
const ModalLogIn = document.querySelector('.background_modal_LogIn')
const LogInLibraryCards = document.querySelector('.Register_btns_LogIn')
BtnLogIn.onclick = function(event) {
    ModalLogIn.classList.add('background_modal_opened')
    profile.classList.remove('profile_opened')
}
LogInLibraryCards.onclick = function(event) {
    ModalLogIn.classList.add('background_modal_opened')
    profile.classList.remove('profile_opened')
}
BtnModalClose[1].onclick = function(event) {
    ModalLogIn.classList.remove('background_modal_opened')
}

const ModalBtnLogIn = document.querySelector('.modal_register_btn_LogIn')
ModalBtnLogIn.onclick = function(event) {
    const emailOrCard = document.querySelector('.emailOrCard')
    const passwordLogIn = document.querySelector('.passwordLogIn')
    if (emailOrCard.value == "" || passwordLogIn.value.length === "")
    {
        return false
    }
    else if(emailOrCard.value === localStorage.getItem("email") && passwordLogIn.value === localStorage.getItem("password"))
    {
        ModalLogIn.classList.remove('background_modal_opened')
        Registered()
    }
    else
    {
        alert("Мы не нашли ваш аккаунт")
    }
}

const LogOut = document.querySelector('.LogOut')
LogOut.onclick = function(event) {
    NotRegistered()
    profile.classList.remove('profile_opened')
}

function Copy(text) {
    const elem = document.createElement('input')
    elem.setAttribute('readonly', '')
    elem.setAttribute('value', text)
    elem.style.position = 'absolute'
    elem.style.left = '-9999px'
    document.body.append(elem)
    elem.select()
    document.execCommand("copy")
    document.body.removeChild(elem)
}

const text = localStorage.getItem("CardNumber")
const BtnCopy = document.querySelector('.copy')
BtnCopy.onclick = function() {
    Copy(text)
}

const ModalMyProfile = document.querySelector('.background_modal_my_profile')
BtnMyProfile.onclick = function(event) {
    ModalMyProfile.classList.add('background_modal_opened')
    profile.classList.remove('profile_opened')
}
BtnModalClose[2].onclick = function(event) {
    ModalMyProfile.classList.remove('background_modal_opened')
}

const BtnsBuy = document.querySelectorAll('.Favorites_books_row_book_btn')
for(let i = 0; i < BtnsBuy.length; i++)
{
    BtnsBuy[i].addEventListener("click", function() {
        if(iconBtn.innerHTML === "")
        {
            ModalLogIn.classList.add('background_modal_opened')
        }
        else if(CardHave === "false")
        {
            ModalBuy.classList.add('background_modal_opened')
        }
        else if(CardHave === "true")
        {
            BtnsBuy[i].classList.add('activebtn')
            BtnsBuy[i].innerHTML = "Own"
            let BooksNumbers = JSON.parse(localStorage.getItem("Books"))
            BooksNumbers.push(i)
            localStorage.setItem("Books", JSON.stringify(BooksNumbers));
            const a = BtnsBuy[i].closest('.Favorites_books_row_book')
            const NewListItem = document.createElement('li')
            NewListItem.innerHTML = a.querySelector('h4').innerHTML + ', ' + a.querySelector('h5').innerHTML
            document.querySelector('.my_profile_right_ul').append(NewListItem)
            CounterBooks()
        }
    })
}

BtnModalClose[3].onclick = function(event) {
    ModalBuy.classList.remove('background_modal_opened')
}

const ModalBuy = document.querySelector('.background_modal_buy')
const BtnBuyCard = document.querySelector('.modal_buy_flex_left_flex_btn')
const BankCardNumber = document.querySelector('.bank_card_number')
const ExpirationCode1 = document.querySelector('.expiration_code_1')
const ExpirationCode2 = document.querySelector('.expiration_code_2')
const CVC = document.querySelector('.cvc')
const CardholderName = document.querySelector('.cardholder_name')
const PostalCode = document.querySelector('.postal_code')
const CityTown = document.querySelector('.city_town')
BtnBuyCard.onclick = function(event) {
    if (BankCardNumber.value.length < 16 || ExpirationCode1.value.length < 2 || ExpirationCode2.value.length < 2 || CVC.value.length < 3 || CardholderName.value === "" || PostalCode.value === "" || CityTown.value === "")
    {
        return false
    }
    localStorage.setItem("CardHave", "true")
    IsCardHave()
    ModalBuy.classList.remove('background_modal_opened')
}

function IsInputsEmpty() {
    if (BankCardNumber.value !== "" && ExpirationCode1.value !== "" && ExpirationCode2.value !== "" && CVC.value !== "" && CardholderName.value !== "" && PostalCode.value !== "" && CityTown.value !== "")
    {
        BtnBuyCard.disabled = false
        BtnBuyCard.classList.add('modal_buy_flex_left_flex_btn_active')
    }
    else
    {
        BtnBuyCard.disabled = true
        BtnBuyCard.classList.remove('modal_buy_flex_left_flex_btn_active')
    }
}
function LimitInputLength(input, n) {
    if(input.value.length > n)
    {
        input.value = input.value.slice(0, n)
    }
}

const BtnCheckTheCard = document.querySelector('.submit')
const ReaderNameCheck = document.querySelector('.ReaderName')
const CardNumberCheck = document.querySelector('.CardNumber_Check')
const CheckInformation = document.querySelector('.check_information')
BtnCheckTheCard.onclick = function(event) {
    if (ReaderNameCheck.value === localStorage.getItem("name") && CardNumberCheck.value === localStorage.getItem("CardNumber"))
    {
        CounterVisits()
        BtnCheckTheCard.classList.add('IsHidden')
        CheckInformation.classList.remove('IsHidden')
        setTimeout(function() {
            BtnCheckTheCard.classList.remove('IsHidden')
            CheckInformation.classList.add('IsHidden')
            ReaderNameCheck.value = ""
            CardNumberCheck.value = ""
        }, 10000)
    }
    else {
        ReaderNameCheck.value = ""
        CardNumberCheck.value = ""
    }
}

const BtnMyProfileLibraryCards = document.querySelector('.Register_btns_Profile')
BtnMyProfileLibraryCards.onclick = function(event) {
    ModalMyProfile.classList.add('background_modal_opened')
}