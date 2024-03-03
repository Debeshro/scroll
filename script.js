var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
})
// Add an event listener to the anchor tag
document.getElementById("https://static.toiimg.com/thumb/msid-103473661,width-1070,height-580,imgsize-113568,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg").addEventListener("click", function() {
  
// Create a new div on the current page
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "This is a new div on the current page.";
    document.body.appendChild(newDiv);
});
