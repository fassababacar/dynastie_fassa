class MyPageAlbum {
    constructor() {
        this.type = "section";
        this.props = { id: "", class: "container-fluide mt-3 pt-3" };
    }
    children = [

        {
            type: "div", props: { id: "", class: "text-center" }, children: [
                {
                    type: "button", props: { id: "idDisplayArbre", class: "btn btn-outline-info m-2", onclick: () => { this.functionDisplayAlbum() } },
                    children: ["Cliquer pour afficher l'album"]
                },
            ]
        },

        // Div global pour le diagram
        {
            type: "div", props: { id: "MyDivAlbumld", class: "" },
            children: []
        },
    ]

    // Function pour animer les portions des divs
    functionAnimer = (varNbr, varDiv, varImages, varIm, varAng) => {
        t = setTimeout(functionAnimer, 10, varNbr, varDiv, varImages, varIm, varAng); // Creation dun timer pour lanimation
        // Cibler chaque div pour lui appliquer une animation
        for (let index = 0; index < varNbr; index++) {//
            var ob = document.getElementById(index);
            ob.style.transform = "perspective(1000px) rotateY(" + varAng[index] + "deg)";
            if (varAng[index] > -90)
                ob.style.visibility = "visible";// Afficher les divs au fur et a mesure a condition quil soit > a -90
            if (varAng[index] < 0)
                varAng[index] += 1; // Gestion du temps danimation
            else
                varAng[index] = 0;// Correction sil a des traits dans limage
            if (varAng[varNbr - 1] == 0) {// Changement de limage
                varIm += 1;
                if (varIm > varImages.length - 1)
                    varIm = 0;
                clearTimeout(t);
                functionInitAlbum(varNbr, varDiv, varImages, varIm, varAng);
            }
        }
    }

    // Function Initialisation global
    functionInitAlbum = (varNbr, varDiv, varImages, varIm, varAng) => {
        for (let index = 0; index < varNbr; index++) {
            try {
                varDiv.removeChild(document.getElementById(index));
            } catch (e) {
                true;
            }
        }
        // console.log(varImages.length);
        for (let indexInit = 0; indexInit < varNbr; indexInit++) {
            varAng[indexInit] = -indexInit * 15;
            var createDiv = document.createElement("div");
            createDiv.style.width = (varDiv.clientWidth / varNbr) + "px";
            createDiv.style.height = varDiv.clientHeight + "px";
            createDiv.className = "maClasse";
            createDiv.setAttribute("id", indexInit);// Creation dun ID pour lutilisation dans lanimation
            createDiv.style.visibility = "hidden";
            createDiv.style.backgroundImage = "url('" + varImages[varIm] + "')";
            createDiv.style.backgroundSize = varDiv.clientWidth + "px auto";
            createDiv.style.backgroundPosition = (indexInit * 100 / (varNbr - 1)) + "% 50%";
            createDiv.style.transform = "perspective(1000px) rotateY(" + varAng[indexInit] + "deg)";// Rotation des div
            varDiv.appendChild(createDiv);
        }
        this.functionAnimer(varNbr, varDiv, varImages, varIm, varAng);
    }

    // Function Chargement de la page
    functionDisplayAlbum = () => {
        var imagesPath = ["mesImages/df-1.png", "mesImages/df1.png", "mesImages/df10.png", "mesImages/df14.png", "mesImages/df15.png", "mesImages/df16.png", "mesImages/df17.png", "mesImages/df18.png", "mesImages/df19.png", "mesImages/df2.png", "mesImages/df20.png", "mesImages/df21.png", "mesImages/df22.png", "mesImages/df23.png", "mesImages/df24.png", "mesImages/df25.png", "mesImages/df26.png", "mesImages/df27.png", "mesImages/df28.png", "mesImages/df29.png", "mesImages/df3.png", "mesImages/df30.png", "mesImages/df31.png", "mesImages/df32.png", "mesImages/df33.png", "mesImages/df34.png", "mesImages/df35.png", "mesImages/df36.png", "mesImages/df39.png", "mesImages/df4.png", "mesImages/df41.png", "mesImages/df42.png", "mesImages/df44.png", "mesImages/df45.png", "mesImages/df46.png", "mesImages/df47.png", "mesImages/df48.png", "mesImages/df49.png", "mesImages/df5.png", "mesImages/df50.png", "mesImages/df51.png", "mesImages/df52.png", "mesImages/df53.png", "mesImages/df54.png", "mesImages/df56.png", "mesImages/df57.png", "mesImages/df59.png", "mesImages/df6.png", "mesImages/df60.png", "mesImages/df61.png", "mesImages/df62.png", "mesImages/df63.png", "mesImages/df64.png", "mesImages/df65.png", "mesImages/df66.png", "mesImages/df67.png", "mesImages/df68.png", "mesImages/df69.png", "mesImages/df7.png", "mesImages/df70.png", "mesImages/df71.png", "mesImages/df72.png", "mesImages/df73.png", "mesImages/df8.png", "mesImages/df9.png", "mesImages/img_avatar1.png"];
        // console.log(imagesPath);
        var getContainerAlbum = document.getElementById("MyDivAlbumld");
        var nbr = 20;
        var im = 0;
        var ang = [];
        // this.functionInitAlbum(nbr, getContainerAlbum, imagesPath, im, ang);

        document.location.href = "https://fassababacar.github.io/album_dynastie_fassa/"
    }
}

export { MyPageAlbum };