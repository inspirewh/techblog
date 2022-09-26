const commentBtn = document.getElementById("commentBtn")

commentBtn.addEventListener("click",function (event){
    event.preventDefault()
    let content = document.getElementById("comment-body").value
    let blog_id = document.getElementById("commentBtn").getAttribute('data-id')


    if(content){
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({content, blog_id}),
            headers: {"Content-Type": "application/json"}
        })
        .then(function(res){
            if (res.ok){
                document.location.replace("/");
            }
        })
    }
})

