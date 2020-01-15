const TtA = (text) => {
    var ans = []
    for (var i = 0; i < text.length; i++) {
         ans[i] = text.charCodeAt(i)
    }
    console.log(...ans)
}
TtA('ARIM')