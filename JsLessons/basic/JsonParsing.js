const post = {
    name: 'some post',
    likes: 20
}

postStr = JSON.stringify(post);
console.log(postStr);

parsed = JSON.parse(postStr);
console.table(parsed);