

export function getRandomLorem() {

    const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales dui et mi cursus egestas. Nam laoreet nisl in massa lobortis, nec auctor enim sagittis. Nam rhoncus tempus risus pulvinar condimentum.";
const lorem2 = "Vestibulum imperdiet lacus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut porta dui. Sed mattis nisl quis mauris lacinia placerat.";
const lorem3 = "Curabitur fringilla felis sit amet risus auctor, in venenatis lacus volutpat. Pellentesque volutpat mi ut ligula dapibus, id congue massa vestibulum. Integer aliquet velit ut orci vehicula, id varius elit vestibulum.";
const lorem4 = "Donec congue sapien ac dui laoreet, in vestibulum ligula varius. Cras a enim facilisis, volutpat elit eget, auctor enim. Nulla facilisi. Duis quis arcu eu dolor dictum malesuada ut vel ligula.";
const lorem5 = "Mauris egestas felis ac ligula fermentum, id aliquam sapien efficitur. Aenean sit amet neque nec lectus vehicula consequat. Quisque id felis at orci malesuada ullamcorper non ac ligula.";
const lorem6 = "Praesent eget lectus vitae orci blandit consequat. In vel lorem in eros iaculis facilisis. Phasellus tincidunt, mi eget sollicitudin consectetur, mauris enim dictum odio, eu accumsan lectus augue a nisi.";
const lorem7 = "Suspendisse potenti. Vivamus interdum purus eget magna scelerisque, eget suscipit tortor laoreet. Nullam vehicula dolor in orci congue, id varius massa venenatis. Integer sed justo nisl.";
const lorem8 = "Phasellus vel orci vel justo gravida ultricies. Cras fermentum felis a sem tristique, sed porttitor urna sollicitudin. Donec non libero bibendum, sodales augue a, commodo velit.";
const lorem9 = "Aliquam erat volutpat. Nulla facilisi. Ut consequat tortor a arcu commodo, vel dapibus ex molestie. Fusce tincidunt, sapien et bibendum dignissim, ex purus congue elit, nec auctor velit lorem nec neque.";
const lorem10 = "Vivamus facilisis ante vel ligula dictum, nec volutpat risus facilisis. Nunc malesuada urna nec velit fermentum, et cursus orci tempus. Integer in dolor nec risus fermentum suscipit.";
const lorem11 = "Ut a ex nec nunc ullamcorper sollicitudin. Etiam viverra ligula non dolor bibendum, non facilisis est hendrerit. Sed lobortis augue in ultricies pharetra.";
const lorem12 = "Nunc non urna ut enim lacinia sollicitudin non in arcu. Morbi et dui accumsan, vulputate felis vel, condimentum turpis. Fusce et eros malesuada, scelerisque elit sed, sagittis nulla.";


const loremArray = [lorem1, lorem2, lorem3, lorem4, lorem5, lorem6, lorem7, lorem8, lorem9, lorem10, lorem11, lorem12]


    function getRandomInt(max) {
        return Math.floor(Math.random() * max)

    }

    const randomtInt = getRandomInt(11)
    
    const randomString = `${loremArray[randomtInt]} ${loremArray[randomtInt]} ${loremArray[randomtInt]} ${loremArray[randomtInt]} ${loremArray[randomtInt]} ${loremArray[randomtInt]}`
    return randomString
}


export function getRandomLoremSmall() {

    const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales dui et mi cursus egestas. Nam laoreet nisl in massa lobortis, nec auctor enim sagittis. Nam rhoncus tempus risus pulvinar condimentum.";
const lorem2 = "Vestibulum imperdiet lacus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut porta dui. Sed mattis nisl quis mauris lacinia placerat.";
const lorem3 = "Curabitur fringilla felis sit amet risus auctor, in venenatis lacus volutpat. Pellentesque volutpat mi ut ligula dapibus, id congue massa vestibulum. Integer aliquet velit ut orci vehicula, id varius elit vestibulum.";
const lorem4 = "Donec congue sapien ac dui laoreet, in vestibulum ligula varius. Cras a enim facilisis, volutpat elit eget, auctor enim. Nulla facilisi. Duis quis arcu eu dolor dictum malesuada ut vel ligula.";
const lorem5 = "Mauris egestas felis ac ligula fermentum, id aliquam sapien efficitur. Aenean sit amet neque nec lectus vehicula consequat. Quisque id felis at orci malesuada ullamcorper non ac ligula.";
const lorem6 = "Praesent eget lectus vitae orci blandit consequat. In vel lorem in eros iaculis facilisis. Phasellus tincidunt, mi eget sollicitudin consectetur, mauris enim dictum odio, eu accumsan lectus augue a nisi.";
const lorem7 = "Suspendisse potenti. Vivamus interdum purus eget magna scelerisque, eget suscipit tortor laoreet. Nullam vehicula dolor in orci congue, id varius massa venenatis. Integer sed justo nisl.";
const lorem8 = "Phasellus vel orci vel justo gravida ultricies. Cras fermentum felis a sem tristique, sed porttitor urna sollicitudin. Donec non libero bibendum, sodales augue a, commodo velit.";
const lorem9 = "Aliquam erat volutpat. Nulla facilisi. Ut consequat tortor a arcu commodo, vel dapibus ex molestie. Fusce tincidunt, sapien et bibendum dignissim, ex purus congue elit, nec auctor velit lorem nec neque.";
const lorem10 = "Vivamus facilisis ante vel ligula dictum, nec volutpat risus facilisis. Nunc malesuada urna nec velit fermentum, et cursus orci tempus. Integer in dolor nec risus fermentum suscipit.";
const lorem11 = "Ut a ex nec nunc ullamcorper sollicitudin. Etiam viverra ligula non dolor bibendum, non facilisis est hendrerit. Sed lobortis augue in ultricies pharetra.";
const lorem12 = "Nunc non urna ut enim lacinia sollicitudin non in arcu. Morbi et dui accumsan, vulputate felis vel, condimentum turpis. Fusce et eros malesuada, scelerisque elit sed, sagittis nulla.";


const loremArray = [lorem1, lorem2, lorem3, lorem4, lorem5, lorem6, lorem7, lorem8, lorem9, lorem10, lorem11, lorem12]


    function getRandomInt(max) {
        return Math.floor(Math.random() * max)

    }

    const randomtInt = getRandomInt(11)
    
    const randomString = `${loremArray[randomtInt]} ${loremArray[randomtInt]} ${loremArray[randomtInt]}`
    return randomString
}

export function getRandomFeatured (arr) {

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr;
    }
    
    
    const slicedArr = shuffle(arr).splice(0,5)
    

    return slicedArr

}