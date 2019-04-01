// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up from a nap and you're in the forest",
            choices: [
                {
                    text: " go back to sleep ",
                    nextLevel: "start",
                },

                {
                    text: " get up and start walking ",
                    nextLevel: "fork",
                },
            ]
        },

        fork: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: " you seee a fork in the road",
            choices: [
                {
                    text: "you see your mom",
                    nextLevel: "start",
                },
                {
                    
                    text:"you see a yellow brick road",
                    nextLevel:"phone"
                }
            ]
        },

        phone: {
            message: " you find a phone at the end of the road",
            choices: [
                {
                    text: "Answer it ",
                     nextLevel:"start"
                },
                { 
                 text:"ignore it and keep walking",
                 nextLevel:"wizard"
                    
                },
            ]
        },
        
        wizard : {
            message:"you come across a wizard",
            choices: [{
                text:"talk to him",
                nextLevel:"over"
                }]
            
            },
        over:{
            message:"he send you home",
            nextLevel:"start"
        }

    }
};
