/* Initialize pointcounters */
        let attempts = 0;
        let points = 0;

        /*Intantiate chips*/
        function setup(gameObj) {
            const {groups} = gameObj;
            const cardArr = [];
            for (const group of Object.keys(groups)) {
                for (const item of Object.keys(groups[group].items)) {
                    const cardDiv = document.createElement("div");
                    cardDiv.setAttribute("id", item);
                    const image = document.createElement("img");
                    image.src = groups[group].items[item].imgUrl;
                    $(cardDiv).append(image);
                    cardDiv.classList = "card";
                    cardArr.push(cardDiv);
                }
            }
            cardArr.sort(() => Math.random() - 0.5)
            $(".cards").append(cardArr);

            const dropArr = [];
            Object.keys(groups).forEach(group => {
                const dropDiv = document.createElement("div");
                dropDiv.setAttribute("id", group);
                dropDiv.classList = `${group} droppable`;
                dropDiv.style.background = groups[group].color;
                dropDiv.innerHTML = group;
                dropArr.push(dropDiv);
            })
            $(".droppables").append(dropArr);
        }
        setup(gameObj);



        function drop (evt, ui ) {
            
            /* setup elements */
            const {groups} = gameObj;
            var card = ui.draggable.context;
            var correctGroupName = Object.keys(groups).find(groupName => Object.keys(groups[groupName].items).includes(card.id)) //find the group name
            var index = Object.keys(groups[correctGroupName].items).findIndex(item => item === card.id); //find index of card in their class (for animation purpose only)


            $(card).draggable("disable");
            /* calculate position offsets for move animation */
            var drop_el_offset = $(`#${correctGroupName}`).offset();
            var drag_el_offset = ui.draggable.offset();
            var left_end = (drop_el_offset.left + ($(this).width() * ((index + 1) / 4))) - (drag_el_offset.left + (ui.draggable.width() / 2));
            var top_end = (drop_el_offset.top + ($(this).height() / 2)) - (drag_el_offset.top + (ui.draggable.height() / 2))+10;

           
            
            /* evaluate if answer is correct or not and change style and counter */
            let waitForAnimation = 0;
            const dropElList = Object.keys(groups[evt.target.id].items);
            if (dropElList.includes(card.id)) {
                card.querySelector("img").style.boxShadow = "0px 0px 0px 3px limeGreen";
                
                points++;
            } else {
                card.querySelector("img").style.boxShadow = "0px 0px 0px 3px tomato";
                card.style.backgroundColor = "tomato";
                
                card.querySelector("img").classList.add("blinking");
                waitForAnimation = 1500;
            }

            
            /* move the card to its correspondent place*/
            setTimeout(()=>{
                $(card).animate({
                    top: `+=${top_end}`,
                    left: `+=${left_end}`
                }, 1000);
            },waitForAnimation);


            /* check when all the cards have been dropped */
            attempts++;
            if (attempts === 3) { //$(".card").length
                $(".display").css("visibility", "visible")
                if (points === attempts) {
                    $(".message").css("color", 'rgb(50, 114, 46)');
                    $(".message").html("Bravo. Geschafft!!!");
                } else {
                    $(".message").css("color", 'rgb(151, 49, 58)');
                    $(".message").html("Versuch es nochmal");
                }
            }
            
            $(card).draggable({revert: false});
        }
        
        
        /* Configurate draggable and droppable items & evaluate items when dropped */
        function setInteractions() {
            $(".card").draggable({
                containment: ".container",
                revert: true
            });

            $(".droppable").droppable({
                drop: drop
            });
        }
        setInteractions();
        

        /* Restart game when restart button clicked */ 
        function restart(){
            $(".card").remove();
            $(".droppable").remove();
            setup(gameObj);
            setInteractions();
            $(".display").css("visibility","hidden");
            $(".message").html("");
            attempts = 0;
            points = 0;
        }
        $(".restart").click(function(){
           restart();
        });