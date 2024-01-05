
fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        let imagesDb = data
        imagesDb.forEach((bild) => {

            let imgUrl = bild.download_url
            let author = bild.author
            let id = bild.id

            console.log(imgUrl);
            console.log(author);
            console.log(id);

            let finalBild = document.createElement("fig")

            const bildShowed = document.createElement("img")
            bildShowed.setAttribute("src", imgUrl)
            bildShowed.setAttribute("alt", author)
            finalBild.appendChild(bildShowed)

            let showAuthor = document.createElement("figcaption")
            showAuthor.textContent = author
            finalBild.appendChild(showAuthor)

            document.querySelector("#photosFeed").appendChild(finalBild)

        });

    })
    .catch((error) => console.log("die Küche brent leider", error))
