AFRAME.registerComponent("markerHandler",{
    init:async function(){
this.el.addEventListener('markerFound',()=>{
    console.log("marker is found")
    this.handleMarkerFound()
})
this.el.addEventListener("markerLost",()=>{
    console.log("marker is lost")
    this.handleMarkerLost()
})
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";

        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")

        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Our Car",

            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://image.freepik.com/free-icon/thumbs-up-hand-symbol_318-41939.jpg",
                title:"Thanks for order",
                text:"Your order will be dilevered soon at your address"
            })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display="none"
    }

})
    