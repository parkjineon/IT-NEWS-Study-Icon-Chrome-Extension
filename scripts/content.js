window.onload = function(){
    setTimeout(e=>{
        alert('페이지 전체가 로드되었습니다.');
        const html = document.querySelector('html');
        const img = html.getElementsByTagName('img')
        console.log(img)
        console.log(img.length)












    },10000)
}

