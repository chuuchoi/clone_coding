document.querySelector('.down-arrow').addEventListener('click',(e)=>{
    e.preventDefault()
    let scrollTop = document.querySelector('html').scrollTop
    if(scrollY>2400){return}
    else if(scrollY>1600){scrollTo({top:2401,left:0,behavior:'smooth'})}
    else if(scrollY>800){scrollTo({top:1601,left:0,behavior:'smooth'})}
    else scrollTo({top:901,left:0,behavior:'smooth'})
})
document.addEventListener('scroll',()=>{
    if(scrollY<=800)renderFirstPage()
    else if(scrollY<=1600)renderSecondPage()
    else if(scrollY<=2400)renderThirdPage()
    else renderForthPage()
})
function renderFirstPage(){
    document.querySelector('.bg-inside circle').style.r='100%'
    document.querySelector('.block-caption').style["z-index"]=null
    document.querySelector('.block-text').style["z-index"]=null
    document.querySelector('.block-explore').style["z-index"]=null
    document.querySelector('.block-caption-text').style.transition=null
    document.querySelector('.block-caption-text').style.opacity='0'
}
function renderSecondPage(){
    document.querySelector('.block-caption').style.visibility='visible'
    document.querySelector('.block-text').style.visibility='hidden'
    document.querySelector('.block-explore').style.visibility='hidden'

    document.querySelector('.bg-inside circle').style.r='0%'

        document.querySelector('.block-caption-text').style.transition="opacity 1s ease-in 800ms"
        document.querySelector('.block-caption-text').style.opacity='1'

    
}
function renderThirdPage(){
    document.querySelector('.block-caption').style.visibility='hidden'
    // document.querySelector('.block-text').style["z-index"]='100'
    document.querySelector('.block-text').style.visibility='visible'
    document.querySelector('.block-explore').style.visibility='hidden'

    document.querySelector('.block-text .text').style.opacity='1'
    document.querySelector('.block-caption-text').style.transition=null
    document.querySelector('.block-caption-text').style.opacity='0'
}
function renderForthPage(){
    document.querySelector('.block-caption').style.visibility='hidden'
    document.querySelector('.block-text').style.visibility='hidden'
    document.querySelector('.block-explore').style.visibility='visible'

    document.querySelector('.block-text .text').style.opacity='1'
    document.querySelector('.block-caption-text').style.opacity='0'
}

document.querySelector('.btn-overlay').addEventListener('mouseenter',(e)=>{
    e.target.style.transition='transform 150ms ease-in'
    e.target.style.transform='translate3d(0px,0px,0px)'
})
document.querySelector('.btn-overlay').addEventListener('mouseleave',(e)=>{
    e.target.style.transition='transform 150ms ease-in'
    e.target.style.transform='translate3d(114px,0px,0px)'
})
document.querySelector('.btn-overlay.info').addEventListener('click',(e)=>{
    document.querySelector('html').style.height="100%"
    document.querySelector('#wrapper').style.height="100%"
    document.querySelector('.overlay-content').style.visibility='visible'
    document.querySelector('.overlay-content').style.opacity='1'
    setTimeout(() => {
        document.querySelector('.block-quote').style.transition='all 500ms cubic-bezier(0.15, 0.12, 0.165, 1)'
        document.querySelector('.block-quote').style.opacity='1'
        document.querySelector('.block-quote').style.transform='matrix(1,0,0,1,0,0)'
    }, 800);
    document.querySelector('.btn-close-overlay').addEventListener('click',(e)=>{
        document.querySelector('.block-quote').style.transition='all 500ms cubic-bezier(0.15, 0.12, 0.165, 1)'
        document.querySelector('.block-quote').style.opacity='0'
        document.querySelector('.block-quote').style.transform='matrix(1,0,0,1,0,40)'
        setTimeout(() => {
            document.querySelector('.overlay-content').style.opacity='0'
            setTimeout(() => {
                document.querySelector('.overlay-content').style.visibility='hidden'
                document.querySelector('html').style.height='4207px'
                document.querySelector('#wrapper').style.height="1007px"
            }, 800);
        }, 500);
        console.log('Close overlay')
    })
})