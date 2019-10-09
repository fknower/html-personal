var cryptoElements = [
    {image:document.getElementById('bitcoinImage'),         button:document.getElementById('bitcoinButton')},
    {image:document.getElementById('bitcoinSegwitImage'),   button:document.getElementById('bitcoinSegwitButton')},
    {image:document.getElementById('ethereumImage'),        button:document.getElementById('ethereumButton')},
    {image:document.getElementById('dashImage'),            button:document.getElementById('dashButton')},
    {image:document.getElementById('litecoinImage'),        button:document.getElementById('litecoinButton')},
    {image:document.getElementById('paxosImage'),           button:document.getElementById('paxosButton')},
    {image:document.getElementById('zecImage'),             button:document.getElementById('zecButton')},
    {image:document.getElementById('eosImage'),             button:document.getElementById('eosButton')},
    {image:document.getElementById('stellerImage'),         button:document.getElementById('stellerButton')},
    
]

//Hide all QR codes
cryptoElements.forEach((crypto)=>{
    crypto.image.style.visibility='hidden'
})

//Toggle QR code visisbility
cryptoElements.forEach((crypto)=>{
    crypto.button.onclick = () => {
        if(crypto.image.style.visibility==='hidden')
        {
            crypto.image.style.visibility = 'visible'
        } else
        {
            crypto.image.style.visibility = 'hidden'
        }
    }
})


   
