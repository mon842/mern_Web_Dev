var cmt=prompt("rpy");
if (cmt.length>5) {
    alert(cmt+ " has "+cmt.length+" has been reduced to "+cmt.slice(0,3));
} else {
    alert(cmt+ " has "+cmt.length);
}