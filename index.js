function postComment() {
<<<<<<< HEAD
  var commenter = document.getElementById("name").value;
  var comment = document.getElementById("text").value;
=======
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
>>>>>>> e301658d81b3e323fd559ebb99b0e73ae208a942
 
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
 
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  commentsDiv.innerHTML += templateHTML;
}

function createPost(){
  //gets the information submitted by the form
  var title = document.getElementById("post-title").value;
  var body = document.getElementById("post-body").value;
  var author = document.getElementById("post-author").value;
  
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  
  //var postElement = document.getElementById('post');
  
  var templatePost = postTemplateFn({'title': title, 'body': body, 'author': author});
  
 // postElement.innerHTML += templatePost;
  
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn  = _.template(pageTemplate);
  
  var postsElement = document.getElementById('posts');
  
  var templatePage = pageTemplateFn({'sidebar': "", 'post' : templatePost});
  
  postsElement.innerHTML += templatePage;
}