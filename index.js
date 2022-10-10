let isFirstPage = true
let isSecondPage = false
let isThirdPage = false
let isFourthPage = false
let flowerId,flowerId1,flowerId2
window.onload=function(e){
    //scrollTo({top:1,left:0,behavior:'smooth'})
    document.querySelector('.block .subtitle').style.transition='all .4s ease-in .8s'
    document.querySelector('.block .subtitle').style.opacity='1'
    document.querySelector('.block .subtitle').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.down-arrow').style.transition='all .4s ease-in 1.3s'
    document.querySelector('.down-arrow').style.opacity='1'
    document.querySelector('.down-arrow').style.transform='translate3d(0,0px,0)'
    document.querySelector('.btn-overlay').style.transition='all .3s ease 1.35s'
    document.querySelector('.btn-overlay').style.opacity='1'
    document.querySelector('.btn-overlay').style.transform='translate3d(114px,0px,0px)'

    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').style.transition='all .3s ease 1.35s'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').style.transition='all .3s ease 1.35s'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').style.transition='all .3s ease 1.35s'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').style.transition='all .3s ease 1.35s'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').style.opacity='1'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').style.opacity='1'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').style.opacity='1'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').style.opacity='1'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').style.transform='translate3d(0px, 0px, 0px)'
    setTimeout(()=>{
        document.querySelector('#wrapper .scroll-indicator .scroll-state-0').style.transition=null
        document.querySelector('#wrapper .scroll-indicator .scroll-state-1').style.transition=null
        document.querySelector('#wrapper .scroll-indicator .scroll-state-2').style.transition=null
        document.querySelector('#wrapper .scroll-indicator .scroll-state-3').style.transition=null
    },1650)
}

document.querySelector('.down-arrow').addEventListener('click',(e)=>{
    e.preventDefault()
    if(scrollY>2400 && !isRendering){return}
    else if(scrollY>1600){scrollTo({top:2401,left:0,behavior:'smooth'})}
    else if(scrollY>800){scrollTo({top:1601,left:0,behavior:'smooth'})}
    else scrollTo({top:901,left:0,behavior:'smooth'})
})
document.querySelector('#wrapper .scroll-indicator .scroll-state-0').addEventListener('click',(e)=>{
    e.preventDefault()
    scrollTo({top:1,left:0,behavior:'smooth'})
})
document.querySelector('#wrapper .scroll-indicator .scroll-state-1').addEventListener('click',(e)=>{
    e.preventDefault()
    scrollTo({top:901,left:0,behavior:'smooth'})
})
document.querySelector('#wrapper .scroll-indicator .scroll-state-2').addEventListener('click',(e)=>{
    e.preventDefault()
    scrollTo({top:1601,left:0,behavior:'smooth'})
})
document.querySelector('#wrapper .scroll-indicator .scroll-state-3').addEventListener('click',(e)=>{
    e.preventDefault()
    scrollTo({top:2401,left:0,behavior:'smooth'})
})
document.addEventListener('scroll',()=>{
    if(scrollY<=800 && !isFirstPage)renderFirstPage()
    else if(scrollY>800 && scrollY<=1600 && !isSecondPage)renderSecondPage()
    else if(scrollY>1600 && scrollY<=2400 && !isThirdPage)renderThirdPage()
    else if(scrollY>2400 && !isFourthPage)  renderForthPage()
})
function renderFirstPage(){
    isFirstPage=true
    isSecondPage = false
    isThirdPage = false
    isFourthPage=false
    console.log(flowerId)
    clearTimeout(flowerId)
    clearTimeout(flowerId1)
    clearTimeout(flowerId2)
    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').classList.add('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').classList.remove('selected')

    document.querySelector('.down-arrow').classList.add('white')

    document.querySelector('.bg-inside circle').style.r='100%'

    document.querySelector('#wrapper .main-flower').style.transition='all .1s ease'
    document.querySelector('#wrapper .main-flower').style.margin='0px'
    document.querySelector('#wrapper .main-flower').style.width='0px'
    document.querySelector('#wrapper .main-flower').style.transform='translate3d(0px, 0px, 0px)'
    resetSecondPage()
    
}
function resetSecondPage(){
    document.querySelector('.block.block-caption .caption-stem').style.transition=null
    document.querySelector('.block.block-caption .caption-stem').style.height='0px'
    document.querySelector('.block-caption-detail.caption-start').style.transition=null
    document.querySelector('.block-caption-detail.caption-start').style.opacity='0'
    document.querySelector('#wrapper .caption-line').style.transition=null
    document.querySelector('#wrapper .caption-line').style.height='0px'
    document.querySelector('.block-caption-detail.caption-duration').style.transition=null
    document.querySelector('.block-caption-detail.caption-duration').style.opacity='0'
    document.querySelector('.block-caption-detail.caption-end').style.transition=null
    document.querySelector('.block-caption-detail.caption-end').style.opacity='0'
    document.querySelector('.block-caption-detail.caption-death').style.transition=null
    document.querySelector('.block-caption-detail.caption-death').style.opacity='0'
    document.querySelector('.block-caption-text').style.transition=null
    document.querySelector('.block-caption-text').style.opacity='0'
}
function renderSecondPage(){
    resetThirdPage()
    //resetForthPage()
    
    isFirstPage=false
    isSecondPage = true
    isThirdPage = false
    isFourthPage=false
    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').classList.add('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').classList.remove('selected')

    document.querySelector('.down-arrow').classList.remove('white')
    document.querySelector('.down-arrow').style.transition='all .4s ease-in .1s'
    document.querySelector('.down-arrow').style.opacity='1'
    document.querySelector('.down-arrow').style.transform='translate3d(0,0px,0)'

    document.querySelector('.block-caption').style.visibility='visible'
    document.querySelector('.block-text').style.visibility='hidden'
    document.querySelector('.block-explore').style.visibility='hidden'

    document.querySelector('.bg-inside circle').style.r='0%'

    //transition을 여러번 걸어줄 때 뒤에 오는 코드가 단시간에 덮어쓰므로 비동기 실행시켜주어야함
    document.querySelector('#wrapper .main-flower').style.transition='all .4s cubic-bezier(0.35, 0.25, 0.55, 0.88)'
    document.querySelector('#wrapper .main-flower').style.transform='translate3d(0px, 0px, 0px)'
    let time=700
    console.log(document.querySelector('#wrapper .main-flower').style.width=='0px')
    if(!(document.querySelector('#wrapper .main-flower').style.width=='0px')) time = 0
    
    flowerId = setTimeout(()=>{
        document.querySelector('#wrapper .main-flower').style.transition='all .4s cubic-bezier(0.35, 0.25, 0.55, 0.88)'
        document.querySelector('#wrapper .main-flower').style.marginLeft='-85px'
        document.querySelector('#wrapper .main-flower').style.marginTop='-85px'
        document.querySelector('#wrapper .main-flower').style.width='170px'
    },time)
    flowerId1 = setTimeout(()=>{
        document.querySelector('#wrapper .main-flower').style.transition='all .3s cubic-bezier(0.15, 0.05, 0.15, 0.18) .3s'
        document.querySelector('#wrapper .main-flower').style.transform='translate3d(0px, -180px, 0px)'
    },400+time)

    document.querySelector('.block.block-caption .caption-stem').style.transition=`all .2s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+1300}ms`
    document.querySelector('.block.block-caption .caption-stem').style.height='359px'
    document.querySelector('.block-caption-detail.caption-start').style.transition=`all .4s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+1400}ms`
    document.querySelector('.block-caption-detail.caption-start').style.opacity='1'

    document.querySelector('#wrapper .caption-line').style.transition=`all .2s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+1700}ms`
    document.querySelector('#wrapper .caption-line').style.height='416px'
    document.querySelector('.block-caption-detail.caption-duration').style.transition=`all .3s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+1750}ms`
    document.querySelector('.block-caption-detail.caption-duration').style.opacity='1'
    document.querySelector('.block-caption-detail.caption-end').style.transition=`all .4s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+1800}ms`
    document.querySelector('.block-caption-detail.caption-end').style.opacity='1'

    flowerId2 = setTimeout(()=>{
        document.querySelector('#wrapper .main-flower').style.transition=`all .2s cubic-bezier(0.15, 0.05, 0.15, 0.18) .2s`
        document.querySelector('#wrapper .main-flower').style.marginLeft='-109px'
        document.querySelector('#wrapper .main-flower').style.marginTop='-109px'
        document.querySelector('#wrapper .main-flower').style.width='218px'
    },2000+time)
    document.querySelector('.block-caption-detail.caption-death').style.transition=`all .4s cubic-bezier(0.15, 0.05, 0.15, 0.18) ${time+2300}ms`
    document.querySelector('.block-caption-detail.caption-death').style.opacity='1'

    document.querySelector('.block-caption-text').style.transition=`opacity .4s ease-in ${time+2600}ms`
    document.querySelector('.block-caption-text').style.opacity='1'
}
function renderThirdPage(){
    resetSecondPage()
    resetForthPage()

    isFirstPage=false
    isSecondPage = false
    isThirdPage = true
    isFourthPage=false
    clearTimeout(flowerId)
    clearTimeout(flowerId1)
    clearTimeout(flowerId2)

    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').classList.add('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').classList.remove('selected')

    document.querySelector('.down-arrow').classList.remove('white')
    document.querySelector('.down-arrow').style.transition='all .4s ease-in .1s'
    document.querySelector('.down-arrow').style.opacity='1'
    document.querySelector('.down-arrow').style.transform='translate3d(0,0px,0)'

    document.querySelector('.block-caption').style.visibility='hidden'
    document.querySelector('.block-text').style.visibility='visible'
    document.querySelector('.block-explore').style.visibility='hidden'

    document.querySelector('#wrapper .main-flower').style.transition='all .4s cubic-bezier(0.35, 0.25, 0.55, 0.88)'
    document.querySelector('#wrapper .main-flower').style.marginLeft='-85px'
    document.querySelector('#wrapper .main-flower').style.marginTop='-85px'
    document.querySelector('#wrapper .main-flower').style.width='170px'
    document.querySelector('#wrapper .main-flower').style.transform='translate3d(0px, -85px, 0px)'

    document.querySelector('.block-text .date').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58) .3s'
    document.querySelector('.block-text .date').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.block-text .date').style.opacity='1'
    document.querySelector('.block-text .text').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58) .3s'
    document.querySelector('.block-text .text').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.block-text .text').style.opacity='1'
}
function resetThirdPage(){
    document.querySelector('.block-text .date').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58)'
    document.querySelector('.block-text .date').style.transform='translate3d(0px, -80px, 0px)'
    document.querySelector('.block-text .date').style.opacity='0'
    document.querySelector('.block-text .text').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58)'
    document.querySelector('.block-text .text').style.transform='translate3d(0px, 80px, 0px)'
    document.querySelector('.block-text .text').style.opacity='0'
}
function renderForthPage(){
    //resetSecondPage()
    resetThirdPage()
    
    isFirstPage=false
    isSecondPage = false
    isThirdPage = false
    isFourthPage=true
    clearTimeout(flowerId)
    clearTimeout(flowerId1)
    clearTimeout(flowerId2)

    document.querySelector('#wrapper .scroll-indicator .scroll-state-0').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-1').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-2').classList.remove('selected')
    document.querySelector('#wrapper .scroll-indicator .scroll-state-3').classList.add('selected')
    
    document.querySelector('.down-arrow').style.transition='all .4s ease-in .1s'
    document.querySelector('.down-arrow').style.opacity='0'
    document.querySelector('.down-arrow').style.transform='translate3d(0,20px,0)'

    document.querySelector('.block-caption').style.visibility='hidden'
    document.querySelector('.block-text').style.visibility='hidden'
    document.querySelector('.block-explore').style.visibility='visible'

    document.querySelector('.block-text .text').style.opacity='1'

    document.querySelector('.block-explore .date').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58) .4s'
    document.querySelector('.block-explore .date').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.block-explore .date').style.opacity='1'
    document.querySelector('.block-explore .text').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58) .4s'
    document.querySelector('.block-explore .text').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.block-explore .text').style.opacity='1'
    document.querySelector('.block-explore-btn').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58) .4s'
    document.querySelector('.block-explore-btn').style.transform='translate3d(0px, 0px, 0px)'
    document.querySelector('.block-explore-btn').style.opacity='1'
}
function resetForthPage(){
    document.querySelector('.block-explore .date').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58)'
    document.querySelector('.block-explore .date').style.transform='translate3d(0px, -80px, 0px)'
    document.querySelector('.block-explore .date').style.opacity='0'
    document.querySelector('.block-explore .text').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58)'
    document.querySelector('.block-explore .text').style.transform='translate3d(0px, 80px, 0px)'
    document.querySelector('.block-explore .text').style.opacity='0'
    document.querySelector('.block-explore-btn').style.transition='all .3s cubic-bezier(0.15, 0.25, 0.75, 0.58)'
    document.querySelector('.block-explore-btn').style.transform='translate3d(0px, 80px, 0px)'
    document.querySelector('.block-explore-btn').style.opacity='0'
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