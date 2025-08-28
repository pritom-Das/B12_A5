


const cards = [
    {cardimg : "assets/emergency.png",
        serviceBan:"জাতীয় জরুরি সেবা ",
        serviceEn : "National Emergency ",
        contact : "999",
        contactInfo : "সার্বজনীন"


    },

    {
        cardimg : "assets/police.png",
        serviceBan:"পুলিশ ",
        serviceEn : "Police ",
        contact : "999",
        contactInfo : "পুলিশ"
        

    },

    {
         cardimg : "assets/fire-service.png",
         serviceBan:"ফায়ার সার্ভিস ",
        serviceEn : "Fire Service ",
        contact : "999",
        contactInfo : "ফায়ার"

    },

    {
        cardimg : "assets/ambulance.png",
        serviceBan:" অ্যাম্বুলেন্স",
        serviceEn : "Ambulance ",
        contact : "1994-999999",
        contactInfo : "স্বাস্থ্য"

    },

    {
         cardimg : "assets/emergency.png",
         serviceBan:"নারী ও শিশু সহায়তা ",
        serviceEn : "Women & Child Helpline ",
        contact : "109",
        contactInfo : "সহায়তা"

    },

    {
        cardimg : "assets/emergency.png",
        serviceBan:" দুদক",
        serviceEn : "Anti-Corruption ",
        contact : "106",
        contactInfo : "সরকারি"

    },
    {
        cardimg : "assets/emergency.png",
        serviceBan:"বিদ্যুৎ বিভ্রাট ",
        serviceEn : "Electricity Outage ",
        contact : "16216",
        contactInfo : "বিদ্যুৎ"

    },
    {
        cardimg : "assets/emergency.png",
        serviceBan:"ব্র্যাক ",
        serviceEn : " Brac  ",
        contact : "16445",
        contactInfo : "এনজিও"

    },
    {
        cardimg : "assets/emergency.png",
        serviceBan:"বাংলাদেশ রেলওয়ে ",
        serviceEn : " Bangladesh Railway",
        contact : "163",
        contactInfo : "পরিবহন"

    },

]

// ..............to Create card................
function createCard (cardData){
    const card_Div = document.createElement('div');
    card_Div.className ="card p-4 border-1 border-gray-200 w-[320px] max-h-[360px] bg-white"

    //image and icon div part
    const imgDiv = document.createElement('div');
    imgDiv.className =" img_icon flex items-center justify-between"
    imgDiv.innerHTML =` <img src="${cardData.cardimg}" alt="" class=" p-2 bg-[#FFE3E2] rounded-xl h-[40px]">
               <i class=" fa-regular fa-heart heart-icon" id=""></i>
    
    `;
    card_Div.appendChild(imgDiv);

    //service div
    const servieDiv = document.createElement('div');
    servieDiv.className =" mt-3";
    servieDiv.innerHTML =`   <h2 class="font-bold">${cardData.serviceBan}</h2>
                    <p class="text-[#5C5C5C]" >${cardData.serviceEn}</p>
                     `;
    card_Div.appendChild(servieDiv);

    //contact div
    const contact_div = document.createElement('div');
    contact_div.className = 'mt-3 space-y-2';
    contact_div.innerHTML=` <h2 class="font-bold"> ${cardData.contact} </h2>
                    <p class="text-[#5C5C5C]  inline bg-gray-100 p-1 px-1.5 rounded-xl" >${cardData.contactInfo}</p>
                    `;

     card_Div.appendChild(contact_div);

     //btn div

     const btnDiv = document.createElement('div');
     btnDiv.className =" mt-4 grid grid-cols-2 gap-2";
     btnDiv.innerHTML = ` <button class="btn text-[#5C5C5C]"><span><i class="fa-regular fa-copy"></i></span>Copy</button>
                      <button class="call-btn btn btn-active btn-success text-white"><span><i class="fa-solid fa-phone"></i></span> <span >Call</span> </button>
                      `;

    card_Div.appendChild(btnDiv);


    return card_Div;
}
const card_container = document.getElementById('cardContainer');
cards.forEach(card =>{
   card_container.appendChild(createCard(card));
})


// .......................heart icon functionality..........

const icons =  document.getElementsByClassName('heart-icon')
for(const icon of icons){
    icon.addEventListener('click', function(){
     icon.classList.toggle('fa-solid')
    let navheart = parseInt(document.getElementById('heart-count').innerText);
    navheart = navheart + 1; 
    console.log(navheart);
    document.getElementById('heart-count').innerText = navheart;
})
}

//........call button funcitonality ...................

const callBtns = document.getElementsByClassName('call-btn');
 for(const callbtn of callBtns){
    callbtn.addEventListener('click',function(){
        const coinCount =  document.getElementById('coincount').innerText;
        let count = parseInt(coinCount);
        if( count < 20 ){
            alert("You don't have enoguh coin to call")
            return;
        }
       
        count = count - 20;
        document.getElementById('coincount').innerText = count; 
        
    })
 }




