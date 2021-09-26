/*Object with classification of cards and their properties (currently only imgUrl)*/
const animals = {
    background: 'url("https://i.pinimg.com/originals/07/d8/67/07d867d81eab5a0a0c8489d59ed4696c.jpg")',
    groups: {
        mammals: {
            title : 'Säugetiere',
            background: 'rgb(255, 205, 172)',
            items: {
                dolphin: {
                    title: "Delphin",
                    imgUrl: 'https://live.staticflickr.com/4061/4589042409_fae70bb32f_b.jpg'
                },
                bear: {
                    title: "Bär",
                    imgUrl: 'https://memegenerator.net/img/images/300x300/13692847.jpg'
                },
                mouse: {
                    title: "Maus",
                    imgUrl: 'https://squeaksandnibbles.com/wp-content/uploads/2018/06/how-long-do-mice-live.jpg'
                }
            }

        },
        reptiles: {
            title : 'Reptilien',
            background: 'lightgreen',
            items: {
                chameleon: {
                    title: "Chamäleon",
                    imgUrl: 'https://live.staticflickr.com/65535/48329213772_3819880e7f_z.jpg'
                },
                turtle: {
                    title: "Schildkröte",
                    imgUrl: 'https://cdn.rewild.org/2020/06/IMG_1109-1024x725.jpg'
                },
                crocodile: {
                    title: "Krokodil",
                    imgUrl: 'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzMzOGVjMmMzMWQwNjFjMDU5NF84MDBweC1TYWx0d2F0ZXJfY3JvY29kaWxlLmpwZyJdLFsicCIsImNvbnZlcnQiLCItYXV0by1vcmllbnQgIl0sWyJwIiwidGh1bWIiLCI4MDB4NTMzKzArMzgiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCI3ODB4NTIwIyJdXQ'
                }
            }

        },
        amphibians: {
            title: 'Amphibien',
            background: 'lightblue',
            items: {
                salamander: {
                    title: "Salamander",
                    imgUrl: 'https://image.geo.de/30046012/t/Av/v3/w1440/r1/-/salamander-gross-jpg--19514-.jpg'
                },
                frog: {
                    title: "Frosch",
                    imgUrl: 'https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A2f313cefad5bc1901b975a8c9089a645ed96708ebcf4a07f94872409%2BIMAGE_TINY%2BIMAGE_TINY.1'
                },
                axolotl: {
                    title: "Axolotl",
                    imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/4/2020/03/GettyImages-1058304880-c-0b54061-scaled.jpg?quality=90&resize=768%2C574'
                }
            }

        }
    }

}


