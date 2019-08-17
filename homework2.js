const Expres=require('express');

var app=new Expres();

app.set('view engine','ejs');


app.get('/',(Request,Response)=>{
    Response.render('index');
});

books=[{
    'title':'Karmayogi','auther':'MS Ashokan','publisher':'Mathrubhumi','price':230,
},{
    'title':'1857- ചരിത്രവും പാഠവും','auther':'Kuruppu K.k.n','publisher':'Mathrubhumi','price':90,'desc':'History'
},{
        'title':'ചരിത്രത്തിലെ ഇന്ത്യ ','auther':'Raghavavariyar M.R. Dr','publisher':'Mathrubhumi','price':150,'desc':'History'
    },
{
    'title':'റെഡ് സോണ്‍','auther':'JSurendran.m.p','publisher':'Mathrubhumi','price':265,'desc':'Sports'
},{
    'title':'ആരാച്ചാര്‍','auther':'Meera K.R','publisher':'Mathrubhumi','price':495,'desc':'Novel'
},{
        'title':'ആൽബട്രോസിന്റെ കരച്ചിൽ','auther':'Methil Radhakrishnan','publisher':'dc books','price':180,'desc':'story'
}];
app.get('/viewbook',(Request,Response) =>{
    Response.render('viewbook',books);
});
app.get('/addbook',(Request,Response) =>{
    Response.render('addbook');
});
app.listen(3456,()=>{
    console.log("Work in progress...!");
});