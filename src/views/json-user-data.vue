<template>

<!-- THIS CODE WRITTEN IN HTML, CSS, VANILLA JS -->

    <body>

        <p>refresh page to see authors</p>

        <div class="users-container">
            <h1 class="title">Authors:</h1>
            <ul id="users-wrapper"></ul>
        </div>

        <div class="posts-container">
            <h1 class="title">Posts by <span id="author">(Select Author Above)</span>:</h1>
            <ul id="posts"></ul>
        </div>

    </body>

</template>

<!-- JAVASCRIPT -->
<script>

    function getUsers(users) {

        console.log('clicked')

        for (let i = 0; i < users.length; i++) {
            var el = document.createElement("li");
            var name = document.createTextNode(users[i].name);
            el.appendChild(name);
            document.getElementById("users-wrapper").appendChild(el);

            // Add styles
            el.setAttribute('style', 'margin: 20px; cursor: pointer; list-style-type: none')

            el.addEventListener('click', () => {
                
                fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${users[i].id}`)
                    .then(response => response.json())
                    .then(renderPosts)
                    
                    // Update posts title
                    document.getElementById('author').innerHTML = users[i].name
            }) 
        }
    }

    function renderPosts(posts) {
        
        document.getElementById('posts').innerHTML = '';
        
        for (let i = 0; i < posts.length; i++) {
            var el = document.createElement("li");
            var body = document.createTextNode(posts[i].body);
            el.appendChild(body);
            document.getElementById("posts").appendChild(el);

            // add styles
            el.setAttribute('style', 'margin: 20px; list-style-type: none;')

        }
    }
    // Get User Data
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(getUsers)
</script>

<!-- STYLES -->
<style scoped>

    body {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .title {
        font-size: 18px;
        border: 1px solid black;
        width: max-content;
        padding: 5px;
        margin: 20px 20px 0 20px;
    }
    
    #users-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    #author {
        font-size: 20px;
        font-style: italic;
    }

    #posts {
        font-size: 14px;
        text-justify: left;
    }
    
    </style>