const blogBtn = document.getElementById("blogBtn")

blogBtn.addEventListener("click",function (event){
    event.preventDefault()
    let title = document.getElementById("blog-title").value
    let content = document.getElementById("blog-content").value
    console.log(title)
    console.log(content)

    if(title && content){
        fetch("/api/blog", {
            method: "POST",
            body: JSON.stringify({title, content}),
            headers: {"Content-Type": "application/json"}
        })
        .then(function(res){
            if (res.ok){
                document.location.reload("/");
            }
        })
    }
})

