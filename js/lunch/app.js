var names =["angela","ben","jim","cole"];

whosPaying(names);

function whosPaying(names) {
    var n=Math.random()*names.length;
    n=Math.floor(n);
    console.log(names[n]);
}
