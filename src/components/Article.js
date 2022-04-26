import React from "react"



function Article({title,
date = "January 1, 1970",
preview,
minutes}){


return(
<article key={title}>
<h3 key ={title}>{title}</h3>
<small key ={date}>{date}</small>
<>
{ minutes < 30 ? RenderCoffee(minutes): RenderBento(minutes) }
 </>
<p key ={preview}>{preview}</p>

</article>
)
}

function RenderCoffee(min){
    let coffeeCount = (Math.round(min/5))
    let coffee = "☕️"
    console.log(coffeeCount)
return(
    <small>
{ `${coffee.repeat(coffeeCount)} ${min} min read`}
        
    </small>
)
}
function RenderBento(min){
    let BentoCount = (Math.round(min/10))
    console.log(BentoCount)
    let BentoBox ="🍱"
return(
    <small>
       { `${BentoBox.repeat(BentoCount)} ${min} min read`}
    </small>
)

}
export default Article