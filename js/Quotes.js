function randomQuotes() {

    var quote = ["“Be yourself; everyone else is already taken.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“You only live once, but if you do it right, once is enough.”", "“Be the change that you wish to see in the world.”"]

    var author = ["― Oscar Wilde", "― Frank Zappa", "― Marcus Tullius Cicero", "― Mae West", "― Mahatma Gandhi"]


    var num = Math.floor(Math.random() * author.length)


    document.getElementById('quote').innerHTML = quote[num]
    document.getElementById('author').innerHTML = author[num]
}