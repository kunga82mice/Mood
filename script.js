
$('button').click(function(){
 var mood = document.getElementById("feeling").value;
 if(mood==="happy") {
     $('#images').empty();
     happyMood();
 }
 
  if(mood==="sad") {
     $('#images').empty();
     sadMood();
 
 }
 
 if(mood==="hungry") {
     $('#images').empty();
     hungryMood();
 }
 
 if(mood==="tired") {
     $('#images').empty();
     tiredMood();
 }
 
   
});


function happyMood(){
    $('#images').show();
    $('#images').append("<img src=http://www.amisvegetarian.com/wp-content/uploads/2018/09/happy-face-thumbs-up-smiley-face-with-thumbs-up-stock-vector-hittoon-169474306-clipart-download-wallpaper.jpg >");
    $('#images').append("<img src=https://www.stenaline.co.uk/-/media/Images/irish-seas/campaigns/2017/happy/ceasar-33.gif?mw=198&hash=FC443A25A74D3351E90E553003E7E3DBD4B1A450 >");
    $('#images').append("<img src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a095c266-c25f-42bd-b0d2-246df714273c/d33zou5-123a62ee-bee7-4943-98b4-0e2c536fc2c2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwOTVjMjY2LWMyNWYtNDJiZC1iMGQyLTI0NmRmNzE0MjczY1wvZDMzem91NS0xMjNhNjJlZS1iZWU3LTQ5NDMtOThiNC0wZTJjNTM2ZmMyYzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2WWsXphUPkrFDMFwhk5er14kIxTWlc1ZDf1NBzQlDt8 >"
 
    );
  
   }

function sadMood(){
    $('#images').show();
    $('#images').append("<img src=http://static1.squarespace.com/static/54a645d4e4b04f5956f31a84/57fbd6f22994cae2cbe106fe/59ebcc91b0786953dece54ad/1508625978929/Sad+Songs.jpg?format=1500w >");
    $('#images').append("<img src=https://media.giphy.com/media/132bzOAtymSqc0/giphy.gif >");
    $('#images').append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sZXBaL0M4k5Th1vd4TUThPufmGLKtomm24eHaHEqTSXu4_WB >"
);
    
  
}
function tiredMood(){
    $('#images').show();
    $('#images').append("<img src=https://sunhorseenergy.com/wp-content/uploads/2015/11/tired.jpg >");
    $('#images').append("<img src=https://media.tenor.com/images/4e5e606edbd0bcecf4f6508ea210db30/tenor.gif>");
    $('#images').append("<img src=https://media.istockphoto.com/vectors/vintage-businessman-walk-sad-tired-weary-character-icon-on-stylish-vector-id495661572?k=6&m=495661572&s=612x612&w=0&h=4Kj5hoCtf_UM_GT42NAnkCX5Zc2txEJYPvQ-qEf1NEw= >");
  
}
function hungryMood(){
    $('#images').show();
     $('#images').append("<img src=https://www.yourdictionary.com/images/definitions/lg/7055.hungry.jpg >");
    $('#images').append("<img src=https://media1.tenor.com/images/18faa505dde1d4bb43c47c3456d36649/tenor.gif?itemid=11021293 >");
    $('#images').append("<img src=https://www.tibco.com/blog/wp-content/uploads/2013/03/hungry1.jpg >");
  
}


