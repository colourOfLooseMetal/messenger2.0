memeGirlUsersDict = new Object();
memeGirlAllMsgs = []
latestMGUid = 1;
//name not used rn
//i dont even use this object lol plan was to add each user to user list and save them to disk or something
function MemeGirlUser(name, id) {
  this.Name = name;
  this.id = id;
}
//create new user, return id which will be latest mguid
app.post('/newMGU', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // var id= req.body.id;
  response = JSON.stringify({id:latestMGUid});
  memeGirlUsersDict[latestMGUid] = new MemeGirlUser("userrr",id);
  res.json(response);
  latestMGUid += 1;
});

//send all messages back to client
app.post('/getMguMessages', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  response = JSON.stringify({memeGirlAllMsgs});
  res.json(response);
});

//get new message
app.post('/newMGUmessage', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  var message= req.body.message;
  var id= req.body.id;
  memeGirlAllMsgs.push([message,id])

});
//this one not used idk what i was going for
// app.post('/GetMemeGirlUser', (req, res) => {
//   console.log("sending egg");
//   res.setHeader('Content-Type', 'application/json');
 
//   // info = JSON.parse(req.body)
//   // console.log(req.body);
//   var id= req.body.id;
//   var name= req.body.name;
//   console.log(name,id);
//   // if(id in memeGirlUsersDict){

//   // }
//   // else{
//   //   memeGirlUsersDict[id] = new MemeGirlUser(name,id);
//   // }
//   // var password = req.body.password;
//   res.send(JSON.stringify({key:id+" "+name}));
// });