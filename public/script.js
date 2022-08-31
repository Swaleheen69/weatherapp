
document.getElementById("btn").addEventListener("click", abc);

        function abc(event){
            event.preventDefault()
             var abc=document.getElementById("in").value;
             if(!abc)
             {
                 document.getElementById("err").innerHTML=`<h1 style="text-align:center; color:wheat;">Please Enter City<h1>`;
                 
             }
             else 
             {
               
                fetch(`/weather/${abc}`).then(res=>{     
                    if(res.ok)
                    {
                        return res.json();
                    }
                     else
                     {
                         throw new Error("error");
                     }
                    }).then(data=>{
                        console.log(data);

                        if(data.cod==404)
                        {
                            document.getElementById("err").innerHTML=`<h1 style="text-align:center; color:wheat;">Please Enter Correct City<h1>`;
                            document.getElementById("in").value="";
                            return;
                        }
                        document.getElementById("card").style.display="inline"
                        var city=data.name;
                        var val=data.weather[0].main;
                        var t=data.main.feels_like-273;
                        var temp=t.toFixed(1);  
                        var mintemp=data.main.temp_min-273;
                        var temp_min=mintemp.toFixed(1); 
                        var maxtemp=data.main.humidity;
        
                        var windspeed=data.wind.speed;

                        console.log("hello")

                        var a=String.fromCharCode(176);
                        var time=new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
                        minute: "numeric"});
                        console.log("hello")
                        document.getElementById("myspan").textContent=`${city}`;
                        document.getElementById("tempspan").textContent=`${temp}`;
                        document.getElementById("typespan").textContent=`${val}`;
                        document.getElementById("datespan").textContent=`${time}`;
                        document.getElementById("windispeed").textContent=`${windspeed}`;
                        document.getElementById("minitemp").textContent=`${temp_min}`;
                        document.getElementById("maxitemp").textContent=`${maxtemp}`;
                        console.log(document.getElementById("windispeed"));

                      
                        if(val=="Clear")
                        {
                           document.getElementById("image").innerHTML=`<i class="fas fa-sun" style="color:yellow; font-size:50px;"></i>`
                        }
                        else if(val=="Haze")
                        {
                            console.log("helo");
                            document.getElementById("image").innerHTML='<i class="fas fa-cloud-sun" style="color:yellow; font-size:50px;"></i>'
                            
                        }
                        else if(val=="Rain")
                        {
                            document.getElementById("image").innerHTML='<i class="fas fa-cloud-rain" style="color:yellow; font-size:50px;"></i>'
                           
                        }
                        else if(val=="Clouds")
                        {
                            document.getElementById("image").innerHTML='<i class="fas fa-cloud" style="color:yellow; font-size:50px;"></i>'
                            
                        }
                        else if(val=="Snow")
                        {
                            document.getElementById("image").innerHTML='<i class="fas fa-cloud-snowflake" style="color:yellow; font-size:50px;"></i>'
                         
                        }
                        else
                        {
                            document.getElementById("image").innerHTML='<i class="fas fa-cloud-sun" style="color:yellow; font-size:50px;"></i>'
                           
                            
                         }
                        document.getElementById("in").value="";
                    }).catch(err=>{
                        document.getElementById("err").innerHTML=`<h1 style="text-align:center; color:wheat;">Please Enter Correct City<h1>`;
                        document.getElementById("in").value="";
                    })
             }
        }
       